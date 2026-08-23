/**
 * Game State Manager
 * Tracks Court Record evidence, Health/Penalties, Current Scene, and Game Progression.
 */

class GameState {
    constructor() {
        this.mode = 'INVESTIGATION'; // 'INVESTIGATION' | 'TRIAL'
        this.currentLocation = 'museum'; // 'museum' | 'detention'
        this.health = 5;
        this.maxHealth = 5;
        this.gameOver = false;
        
        // Court Record Database
        this.allEvidence = {
            insignia_abogado: {
                id: 'insignia_abogado',
                name: 'Insignia de Abogado CH',
                icon: 'assets/insignia_abogado.png',
                desc: 'Mi prestigiosa insignia de abogado heroico. "¡No contaban con mi astucia!"'
            },
            chipote_chillon: {
                id: 'chipote_chillon',
                name: 'Chipote Chillón',
                icon: 'assets/chipote_chillon.png',
                desc: 'Arma supuestamente letal. Hecho de vinil suave; sólo emite un chillido al golpear.'
            },
            pastillas_chiquitolina: {
                id: 'pastillas_chiquitolina',
                name: 'Pastillas de Chiquitolina',
                icon: 'assets/pastillas_chiquitolina.png',
                desc: 'Píldoras que reducen el tamaño de quien las toma al de un ratón durante 15 minutos.'
            },
            antenitas_vinil: {
                id: 'antenitas_vinil',
                name: 'Antenitas de Vinil',
                icon: 'assets/antenitas_vinil.png',
                desc: 'Detectan la presencia del enemigo. Registraron actividad sospechosa a las 8:45 PM.'
            },
            informe_medico: {
                id: 'informe_medico',
                name: 'Informe Médico de Alma Negra',
                icon: 'assets/informe_medico.png',
                desc: 'El guardia fue noqueado por un saco pesado con monedas metálicas, no por goma/vinil.'
            },
            foto_crimen: {
                id: 'foto_crimen',
                name: 'Foto del Sospechoso',
                icon: 'assets/foto_crimen.png',
                desc: 'Foto de seguridad a las 9:00 PM. El logo del pecho dice "HC" (¡está invertido en un espejo!).'
            },
            chicharra_oro: {
                id: 'chicharra_oro',
                name: 'Chicharra Paralizadora de Oro',
                icon: 'assets/chicharra_oro.png',
                desc: 'La reliquia invaluable robada. Quien la hace sonar una vez paraliza todo a su alrededor.'
            },
            bolsa_dolares: {
                id: 'bolsa_dolares',
                name: 'Bolsa de Dólares de Super Sam',
                icon: 'assets/bolsa_dolares.png',
                desc: 'Saco pesado con monedas de plata y billetes con el lema "Time is Money".'
            }
        };

        // Player's collected evidence IDs
        this.inventory = ['insignia_abogado'];

        // Investigation progress flags
        this.flags = {
            examined_pedestal: false,
            examined_armor: false,
            examined_vent: false,
            talked_florinda_crime: false,
            talked_florinda_suspect: false,
            presented_chiquitolina_florinda: false,
            visited_detention: false,
            talked_chapulin_reason: false,
            talked_chapulin_antenitas: false,
            ready_for_trial: false
        };

        // Trial progress
        this.trialPhase = 'INTRO';
        this.testimonyIndex = 0;
        this.statementIndex = 0;
    }

    addEvidence(evidenceId) {
        if (!this.inventory.includes(evidenceId) && this.allEvidence[evidenceId]) {
            this.inventory.push(evidenceId);
            return true;
        }
        return false;
    }

    hasEvidence(evidenceId) {
        return this.inventory.includes(evidenceId);
    }

    takePenalty() {
        if (this.health > 0) {
            this.health--;
            if (this.health <= 0) {
                this.gameOver = true;
            }
            return true;
        }
        return false;
    }

    resetHealth() {
        this.health = this.maxHealth;
        this.gameOver = false;
    }

    checkTrialReadiness() {
        // Ready when collected: chipote, pastillas, antenitas, informe, foto
        const hasClues = this.hasEvidence('chipote_chillon') &&
                         this.hasEvidence('pastillas_chiquitolina') &&
                         this.hasEvidence('antenitas_vinil') &&
                         this.hasEvidence('informe_medico') &&
                         this.hasEvidence('foto_crimen');
        if (hasClues) {
            this.flags.ready_for_trial = true;
        }
        return this.flags.ready_for_trial;
    }
}

window.gameState = new GameState();
