/**
 * Ace Attorney Game Engine & UI Controller
 * Manages rendering, animations, screen shakes, typewriter text, and input interactions.
 */

class GameEngine {
    constructor() {
        this.gameState = window.gameState;
        this.soundEngine = window.soundEngine;
        this.midiComposer = window.midiComposer;
        this.script = window.CASE_SCRIPT;

        // UI DOM elements
        this.bgEl = document.getElementById('scene-bg');
        this.speakerBoxEl = document.getElementById('speaker-name');
        this.dialogueTextEl = document.getElementById('dialogue-text');
        this.charSpriteEl = document.getElementById('character-sprite');
        this.cutinOverlayEl = document.getElementById('cutin-overlay');
        this.cutinImgEl = document.getElementById('cutin-img');
        this.flashEl = document.getElementById('screen-flash');
        this.courtRecordModalEl = document.getElementById('court-record-modal');
        this.evidenceListEl = document.getElementById('evidence-grid');
        this.evidenceDescEl = document.getElementById('evidence-description');
        this.evidenceTitleEl = document.getElementById('evidence-title');
        this.evidenceIconPreviewEl = document.getElementById('evidence-icon-preview');
        this.presentBtnEl = document.getElementById('btn-modal-present');
        this.healthBarEl = document.getElementById('health-bar');
        this.investigationNavEl = document.getElementById('investigation-controls');
        this.examineNavEl = document.getElementById('examine-controls');
        this.trialNavEl = document.getElementById('trial-controls');
        this.hotspotsContainerEl = document.getElementById('hotspots-container');
        this.examineTooltipEl = document.getElementById('examine-tooltip');
        this.locationBannerEl = document.getElementById('location-banner');
        this.dialogueBoxEl = document.getElementById('dialogue-box');
        this.talkOptionsModalEl = document.getElementById('talk-options-modal');
        this.talkListEl = document.getElementById('talk-options-list');
        this.startSplashOverlayEl = document.getElementById('start-splash-overlay');
        this.btnAudioToggleEl = document.getElementById('btn-audio-toggle');

        // Typewriter state
        this.isTyping = false;
        this.typewriterTimer = null;
        this.fullTextToType = '';
        this.typeIdx = 0;
        this.dialogueQueue = [];
        this.onQueueFinish = null;

        // Active selection
        this.selectedEvidenceId = null;
        this.currentTestimony = null;
        this.currentStatementIdx = 0;
        this.hasStarted = false;
        this.isExamineActive = false;
        this.currentLocationCharPose = null;
    }

    init() {
        this.setupEventListeners();
        this.updateHealthUI();
    }

    setupEventListeners() {
        // Start game button
        document.getElementById('btn-start-game').addEventListener('click', () => {
            this.startGame();
        });

        // Audio Toggle
        this.btnAudioToggleEl.addEventListener('click', (e) => {
            e.stopPropagation();
            const isMuted = this.soundEngine.toggleMute();
            this.btnAudioToggleEl.textContent = isMuted ? '🔇' : '🔊';
        });

        // Dialogue box click to advance or complete typewriter
        this.dialogueBoxEl.addEventListener('click', (e) => {
            e.stopPropagation();
            this.handleAdvance();
        });

        document.addEventListener('keydown', (e) => {
            if (!this.hasStarted) {
                this.startGame();
                return;
            }
            if (e.code === 'Space' || e.code === 'Enter') {
                this.handleAdvance();
            }
        });

        // Global click listener to unlock audio
        document.addEventListener('click', () => {
            if (this.soundEngine) {
                this.soundEngine.ensureActive();
            }
        }, { once: false });

        // Badge / Court Record button
        document.getElementById('btn-court-record').addEventListener('click', (e) => {
            e.stopPropagation();
            this.openCourtRecord();
        });

        // Close modal button
        document.getElementById('btn-close-record').addEventListener('click', (e) => {
            e.stopPropagation();
            this.closeCourtRecord();
        });

        // Present button in modal
        this.presentBtnEl.addEventListener('click', (e) => {
            e.stopPropagation();
            if (this.selectedEvidenceId) {
                const evId = this.selectedEvidenceId;
                this.closeCourtRecord();
                this.handlePresentEvidence(evId);
            }
        });

        // Press (Presionar) button
        document.getElementById('btn-press').addEventListener('click', (e) => {
            e.stopPropagation();
            this.handlePressStatement();
        });

        // Present button on trial HUD
        document.getElementById('btn-trial-present').addEventListener('click', (e) => {
            e.stopPropagation();
            this.openCourtRecord(true);
        });

        // Next/Prev Statement
        document.getElementById('btn-prev-statement').addEventListener('click', (e) => {
            e.stopPropagation();
            this.prevStatement();
        });
        document.getElementById('btn-next-statement').addEventListener('click', (e) => {
            e.stopPropagation();
            this.nextStatement();
        });

        // Investigation Controls
        document.getElementById('btn-inv-examine').addEventListener('click', (e) => {
            e.stopPropagation();
            this.startExamineMode();
        });
        document.getElementById('btn-examine-back').addEventListener('click', (e) => {
            e.stopPropagation();
            this.exitExamineMode();
        });
        document.getElementById('btn-inv-talk').addEventListener('click', (e) => {
            e.stopPropagation();
            this.openTalkMenu();
        });
        document.getElementById('btn-inv-move').addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleLocation();
        });
        document.getElementById('btn-inv-trial').addEventListener('click', (e) => {
            e.stopPropagation();
            this.startTrial();
        });

        // Close talk menu
        document.getElementById('btn-close-talk').addEventListener('click', (e) => {
            e.stopPropagation();
            this.talkOptionsModalEl.classList.add('hidden');
        });

        // Track cursor for floating examine tooltip
        document.getElementById('game-screen').addEventListener('mousemove', (e) => {
            if (this.isExamineActive) {
                const rect = document.getElementById('game-screen').getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                this.examineTooltipEl.style.left = `${x}px`;
                this.examineTooltipEl.style.top = `${y}px`;
            }
        });
    }

    startGame() {
        if (this.hasStarted) return;
        this.hasStarted = true;

        this.soundEngine.init();
        this.soundEngine.resume();
        this.soundEngine.playGavel();

        this.startSplashOverlayEl.style.opacity = '0';
        setTimeout(() => {
            this.startSplashOverlayEl.classList.add('hidden');
        }, 400);

        this.startInvestigation('museum');
    }

    handleAdvance() {
        this.soundEngine.ensureActive();
        if (this.isTyping) {
            clearInterval(this.typewriterTimer);
            this.isTyping = false;
            this.dialogueTextEl.textContent = this.fullTextToType;
        } else if (this.dialogueQueue.length > 0) {
            const nextLine = this.dialogueQueue.shift();
            this.renderDialogueLine(nextLine);
        } else if (this.onQueueFinish) {
            const cb = this.onQueueFinish;
            this.onQueueFinish = null;
            cb();
        }
    }

    // --- DIALOGUE & TYPEWRITER ---

    queueDialogue(dialogueArray, onComplete = null) {
        this.dialogueQueue = [...dialogueArray];
        this.onQueueFinish = onComplete;
        if (this.dialogueQueue.length > 0) {
            const first = this.dialogueQueue.shift();
            this.renderDialogueLine(first);
        }
    }

    renderDialogueLine(line) {
        if (!line) return;

        // Background switch
        if (line.bg) {
            this.bgEl.style.backgroundImage = `url('${line.bg}')`;
        }

        // BGM switch
        if (line.bgm) {
            this.midiComposer.playTrack(line.bgm);
        }

        // SFX trigger
        if (line.sfx) {
            this.triggerSFX(line.sfx);
        }

        // Cut-in animation
        if (line.cutin) {
            this.showCutin(line.cutin);
        }

        // Character Pose
        if (line.pose) {
            this.currentLocationCharPose = line.pose;
            this.setPose(line.pose);
        } else if (line.speaker === 'DEFENSA' || line.speaker === 'NARRADOR') {
            this.hideCharacter();
        }

        // Add evidence if specified
        if (line.addEvidence) {
            const added = this.gameState.addEvidence(line.addEvidence);
            if (added) {
                this.showNotification(`¡Añadido al Acta del Juicio: ${this.gameState.allEvidence[line.addEvidence].name}!`);
            }
        }

        // Speaker Name
        this.speakerBoxEl.textContent = line.speaker || '';

        // Typewriter Effect
        this.startTypewriter(line.text || '');
    }

    startTypewriter(text) {
        clearInterval(this.typewriterTimer);
        this.isTyping = true;
        this.fullTextToType = text;
        this.typeIdx = 0;
        this.dialogueTextEl.textContent = '';

        let count = 0;
        this.typewriterTimer = setInterval(() => {
            if (this.typeIdx < this.fullTextToType.length) {
                this.dialogueTextEl.textContent += this.fullTextToType[this.typeIdx];
                if (count % 2 === 0 && this.fullTextToType[this.typeIdx] !== ' ') {
                    this.soundEngine.playTextBlip();
                }
                this.typeIdx++;
                count++;
            } else {
                clearInterval(this.typewriterTimer);
                this.isTyping = false;
            }
        }, 28);
    }

    // --- VISUAL EFFECTS ---

    setPose(poseName) {
        this.charSpriteEl.src = `assets/${poseName}.png`;
        this.charSpriteEl.classList.remove('hidden');
    }

    hideCharacter() {
        this.charSpriteEl.classList.add('hidden');
    }

    shakeScreen(durationMs = 350) {
        const stage = document.getElementById('game-screen');
        stage.classList.add('screen-shake');
        setTimeout(() => {
            stage.classList.remove('screen-shake');
        }, durationMs);
    }

    flashScreen() {
        this.flashEl.classList.remove('hidden');
        this.flashEl.style.opacity = '0.9';
        setTimeout(() => {
            this.flashEl.style.opacity = '0';
            setTimeout(() => this.flashEl.classList.add('hidden'), 200);
        }, 120);
    }

    showCutin(cutinName) {
        this.cutinImgEl.src = `assets/${cutinName}.png`;
        this.cutinOverlayEl.classList.remove('hidden');
        this.cutinOverlayEl.classList.add('cutin-animate');
        this.shakeScreen(400);
        this.flashScreen();

        setTimeout(() => {
            this.cutinOverlayEl.classList.add('hidden');
            this.cutinOverlayEl.classList.remove('cutin-animate');
        }, 1100);
    }

    triggerSFX(sfxName) {
        if (sfxName === 'gavel') {
            this.soundEngine.playGavel();
            this.shakeScreen(300);
        } else if (sfxName === 'desk_slam') {
            this.soundEngine.playDeskSlam();
            this.shakeScreen(250);
        } else if (sfxName === 'whoosh') {
            this.soundEngine.playObjectionWhoosh();
        } else if (sfxName === 'realization') {
            this.soundEngine.playRealization();
            this.flashScreen();
        } else if (sfxName === 'damage') {
            this.soundEngine.playDamage();
            this.shakeScreen(450);
            this.flashScreen();
        } else if (sfxName === 'chipote') {
            this.soundEngine.playChipoteSqueak();
        } else if (sfxName === 'chicharra') {
            this.soundEngine.playChicharra();
            this.flashScreen();
        }
    }

    showNotification(msg) {
        const notif = document.getElementById('game-notification');
        notif.textContent = msg;
        notif.classList.remove('hidden');
        notif.classList.add('notif-slide');
        setTimeout(() => {
            notif.classList.add('hidden');
            notif.classList.remove('notif-slide');
        }, 2800);
    }

    // --- HEALTH / PENALTY UI ---

    updateHealthUI() {
        this.healthBarEl.innerHTML = '';
        for (let i = 0; i < this.gameState.maxHealth; i++) {
            const mark = document.createElement('span');
            mark.className = 'penalty-mark' + (i < this.gameState.health ? ' active' : ' empty');
            mark.textContent = '!';
            this.healthBarEl.appendChild(mark);
        }
    }

    // --- COURT RECORD MODAL ---

    openCourtRecord(isTrialPresent = false) {
        this.courtRecordModalEl.classList.remove('hidden');
        this.evidenceListEl.innerHTML = '';
        this.selectedEvidenceId = null;
        this.presentBtnEl.style.display = isTrialPresent ? 'block' : 'none';

        this.gameState.inventory.forEach((id, idx) => {
            const item = this.gameState.allEvidence[id];
            if (!item) return;

            const card = document.createElement('div');
            card.className = 'evidence-card' + (idx === 0 ? ' selected' : '');
            card.innerHTML = `<img src="${item.icon}" alt="${item.name}"><p>${item.name}</p>`;

            card.addEventListener('click', () => {
                document.querySelectorAll('.evidence-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                this.selectEvidence(id);
            });

            this.evidenceListEl.appendChild(card);
        });

        if (this.gameState.inventory.length > 0) {
            this.selectEvidence(this.gameState.inventory[0]);
        }
    }

    selectEvidence(id) {
        this.selectedEvidenceId = id;
        const item = this.gameState.allEvidence[id];
        if (!item) return;
        this.evidenceTitleEl.textContent = item.name;
        this.evidenceDescEl.textContent = item.desc;
        this.evidenceIconPreviewEl.src = item.icon;
        this.evidenceIconPreviewEl.classList.remove('hidden');
    }

    closeCourtRecord() {
        this.courtRecordModalEl.classList.add('hidden');
    }

    // --- INVESTIGATION MODE ---

    startInvestigation(location = 'museum') {
        this.gameState.mode = 'INVESTIGATION';
        this.gameState.currentLocation = location;
        this.investigationNavEl.classList.remove('hidden');
        this.examineNavEl.classList.add('hidden');
        this.trialNavEl.classList.add('hidden');
        this.isExamineActive = false;
        this.hotspotsContainerEl.classList.remove('visible-hotspots');
        this.examineTooltipEl.classList.add('hidden');

        const scene = this.script.investigation[location];
        this.locationBannerEl.textContent = scene.title;
        this.bgEl.style.backgroundImage = `url('${scene.bg}')`;
        this.midiComposer.playTrack(scene.bgm);

        this.renderHotspots(scene.hotspots || []);
        this.queueDialogue(scene.intro);
    }

    renderHotspots(hotspots) {
        this.hotspotsContainerEl.innerHTML = '';
        hotspots.forEach(h => {
            const spot = document.createElement('div');
            spot.className = 'hotspot-area';
            spot.style.left = `${h.x}%`;
            spot.style.top = `${h.y}%`;
            spot.style.width = `${h.w}%`;
            spot.style.height = `${h.h}%`;
            spot.title = h.label;

            // Hover tooltip
            spot.addEventListener('mouseenter', () => {
                if (this.isExamineActive) {
                    this.examineTooltipEl.textContent = `🔍 ${h.label}`;
                    this.examineTooltipEl.classList.remove('hidden');
                }
            });
            spot.addEventListener('mouseleave', () => {
                this.examineTooltipEl.classList.add('hidden');
            });

            spot.addEventListener('click', (e) => {
                e.stopPropagation();
                this.soundEngine.playRealization();
                this.examineTooltipEl.classList.add('hidden');
                this.exitExamineMode();

                this.queueDialogue(h.dialogue, () => {
                    this.checkInvestigationProgress();
                });
            });

            this.hotspotsContainerEl.appendChild(spot);
        });
    }

    startExamineMode() {
        this.isExamineActive = true;
        this.hotspotsContainerEl.classList.add('visible-hotspots');
        this.investigationNavEl.classList.add('hidden');
        this.examineNavEl.classList.remove('hidden');
        this.hideCharacter(); // Clean view of the crime scene

        this.speakerBoxEl.textContent = "MODO EXAMINAR";
        this.startTypewriter("🔍 Mueve el cursor y haz clic sobre los objetos para investigar.");
    }

    exitExamineMode() {
        this.isExamineActive = false;
        this.hotspotsContainerEl.classList.remove('visible-hotspots');
        this.examineTooltipEl.classList.add('hidden');
        this.examineNavEl.classList.add('hidden');
        this.investigationNavEl.classList.remove('hidden');

        // Restore character if present in current scene
        if (this.currentLocationCharPose) {
            this.setPose(this.currentLocationCharPose);
        }

        this.speakerBoxEl.textContent = "DEFENSA";
        this.startTypewriter("¿Qué deberíamos investigar a continuación?");
    }

    openTalkMenu() {
        const scene = this.script.investigation[this.gameState.currentLocation];
        if (!scene || !scene.talkOptions) return;

        this.talkListEl.innerHTML = '';
        scene.talkOptions.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'menu-btn talk-btn';
            btn.textContent = opt.label;
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.talkOptionsModalEl.classList.add('hidden');
                this.queueDialogue(opt.dialogue, () => {
                    this.checkInvestigationProgress();
                });
            });
            this.talkListEl.appendChild(btn);
        });

        this.talkOptionsModalEl.classList.remove('hidden');
    }

    toggleLocation() {
        const nextLoc = this.gameState.currentLocation === 'museum' ? 'detention' : 'museum';
        this.startInvestigation(nextLoc);
    }

    checkInvestigationProgress() {
        const isReady = this.gameState.checkTrialReadiness();
        const trialBtn = document.getElementById('btn-inv-trial');
        if (isReady) {
            trialBtn.classList.remove('disabled');
            trialBtn.classList.add('pulse-glow');
            this.showNotification("¡Has reunido todas las pruebas! ¡Puedes iniciar el Juicio!");
        }
    }

    // --- TRIAL MODE ---

    startTrial() {
        this.gameState.mode = 'TRIAL';
        this.investigationNavEl.classList.add('hidden');
        this.examineNavEl.classList.add('hidden');
        this.trialNavEl.classList.remove('hidden');
        this.hotspotsContainerEl.innerHTML = '';
        this.locationBannerEl.textContent = "Tribunal Superior - Sala de Audiencias No. 1";

        this.queueDialogue(this.script.trial.intro, () => {
            this.startTestimony('testimony1');
        });
    }

    startTestimony(testimonyKey) {
        this.currentTestimony = this.script.trial[testimonyKey];
        this.currentStatementIdx = 0;
        this.midiComposer.playTrack(this.currentTestimony.bgm);
        this.bgEl.style.backgroundImage = `url('assets/bg_witness.webp')`;

        this.showNotification(this.currentTestimony.title);
        this.renderCurrentStatement();
    }

    renderCurrentStatement() {
        if (!this.currentTestimony) return;
        const stmt = this.currentTestimony.statements[this.currentStatementIdx];
        this.renderDialogueLine({
            speaker: stmt.speaker,
            pose: stmt.pose,
            text: stmt.text
        });
    }

    nextStatement() {
        if (!this.currentTestimony) return;
        this.currentStatementIdx = (this.currentStatementIdx + 1) % this.currentTestimony.statements.length;
        this.renderCurrentStatement();
    }

    prevStatement() {
        if (!this.currentTestimony) return;
        this.currentStatementIdx = (this.currentStatementIdx - 1 + this.currentTestimony.statements.length) % this.currentTestimony.statements.length;
        this.renderCurrentStatement();
    }

    handlePressStatement() {
        if (!this.currentTestimony) return;
        const stmt = this.currentTestimony.statements[this.currentStatementIdx];
        if (stmt.pressText) {
            this.queueDialogue(stmt.pressText, () => {
                this.renderCurrentStatement();
            });
        }
    }

    handlePresentEvidence(evidenceId) {
        if (!this.currentTestimony) return;
        const stmt = this.currentTestimony.statements[this.currentStatementIdx];

        if (stmt.contradiction && stmt.contradiction.evidence.includes(evidenceId)) {
            this.queueDialogue(stmt.contradiction.successDialogue, () => {
                if (this.currentTestimony === this.script.trial.testimony1) {
                    this.startTestimony('testimony2');
                } else if (this.currentTestimony === this.script.trial.testimony2) {
                    this.startClimax();
                }
            });
        } else {
            this.gameState.takePenalty();
            this.updateHealthUI();
            this.triggerSFX('damage');

            const penaltyDialogue = [
                { cutin: "objection_protesto", speaker: "DEFENSA", text: "¡PROTESTO!", sfx: "whoosh" },
                { speaker: "SUPER SAM", text: "Time is money, and you are wasting mine! Esa prueba no contradice en absoluto el testimonio.", pose: "supersam_point" },
                { speaker: "JUEZ", text: "¡La fiscalía tiene razón! Penalizaré a la defensa por presentar pruebas irrelevantes.", pose: "judge_gavel", sfx: "gavel" }
            ];

            if (this.gameState.gameOver) {
                penaltyDialogue.push({
                    speaker: "JUEZ",
                    pose: "judge_gavel",
                    text: "¡La defensa ha agotado sus oportunidades! Declaro al acusado... ¡CULPABLE!",
                    sfx: "gavel"
                });
                this.queueDialogue(penaltyDialogue, () => {
                    this.showGameOverModal();
                });
            } else {
                this.queueDialogue(penaltyDialogue, () => {
                    this.renderCurrentStatement();
                });
            }
        }
    }

    startClimax() {
        this.bgEl.style.backgroundImage = `url('assets/bg_courtroom.webp')`;
        this.midiComposer.playTrack('suspense');

        this.queueDialogue(this.script.trial.climax.dialogue, () => {
            this.openCourtRecord(true);
            this.presentBtnEl.onclick = () => {
                const evId = this.selectedEvidenceId;
                this.closeCourtRecord();
                if (this.script.trial.climax.presentTarget.includes(evId)) {
                    this.queueDialogue(this.script.trial.climax.verdict, () => {
                        this.triggerConfetti();
                    });
                } else {
                    this.gameState.takePenalty();
                    this.updateHealthUI();
                    this.triggerSFX('damage');
                    this.showNotification("¡Prueba incorrecta! Revisa tus pistas.");
                    this.startClimax();
                }
            };
        });
    }

    triggerConfetti() {
        const confettiContainer = document.getElementById('confetti-container');
        confettiContainer.classList.remove('hidden');
        for (let i = 0; i < 80; i++) {
            const piece = document.createElement('div');
            piece.className = 'confetti-piece';
            piece.style.left = `${Math.random() * 100}%`;
            piece.style.backgroundColor = ['#FFD700', '#FF0000', '#00E5FF', '#76FF03', '#FFFFFF'][Math.floor(Math.random() * 5)];
            piece.style.animationDelay = `${Math.random() * 2.5}s`;
            piece.style.transform = `rotate(${Math.random() * 360}deg)`;
            confettiContainer.appendChild(piece);
        }
    }

    showGameOverModal() {
        alert("¡FIN DEL JUEGO! El Chapulín fue declarado culpable. Presiona Aceptar para reintentar el Juicio.");
        this.gameState.resetHealth();
        this.updateHealthUI();
        this.startTrial();
    }
}

window.addEventListener('DOMContentLoaded', () => {
    window.gameEngine = new GameEngine();
    window.gameEngine.init();
});
