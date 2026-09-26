// @Architecture(descriptionShort="Fixture helper creating clean DOM tree matching index.html", type="fake", icon="panel")
/**
 * DOM Fixture Helper for testing Ace Attorney DOM controllers.
 */

import { getDomElements, type DomElements } from '../../src/engine/Private/DomElements.js';

export function setupDomHarness(): DomElements {
  document.body.innerHTML = `
    <div id="game-screen">
      <div id="scene-bg"></div>
      <div id="character-container">
        <img id="character-sprite" src="" alt="Character Pose" class="hidden">
      </div>
      <div id="court-furniture-container" class="hidden">
        <img id="court-furniture-sprite" src="" alt="Courtroom Furniture">
      </div>
      <div id="hotspots-container"></div>
      <div id="examine-tooltip" class="hidden">🔍 Inspeccionar</div>
      <div id="top-hud">
        <div id="location-banner">Museo</div>
        <div id="hud-right-controls">
          <button id="btn-lang-toggle" class="hud-btn">🌐 ES</button>
          <button id="btn-audio-toggle" class="hud-btn">🔊</button>
          <button id="btn-save-game" class="hud-btn">💾</button>
          <button id="btn-load-game" class="hud-btn">📂</button>
          <button id="btn-history" class="hud-btn">📜</button>
          <div id="health-bar"></div>
          <button id="btn-court-record"><img src="" alt="Insignia"><span>Acta</span></button>
        </div>
      </div>
      <div id="climax-present-prompt" class="hidden"></div>
      <div id="game-notification" class="hidden"></div>
      <div id="controls-bar">
        <div id="investigation-controls">
          <button id="btn-inv-examine">🔍 Examinar</button>
          <button id="btn-inv-talk">💬 Hablar</button>
          <button id="btn-inv-move">🏃 Moverse</button>
          <button id="btn-inv-trial" class="disabled" disabled>⚖️ Ir a Juicio</button>
        </div>
        <div id="examine-controls" class="hidden">
          <button id="btn-examine-back">◀ Volver</button>
        </div>
        <div id="trial-controls" class="hidden">
          <button id="btn-prev-statement">◀ Anterior</button>
          <button id="btn-press">💥 Presionar</button>
          <button id="btn-trial-present">📜 Presentar</button>
          <button id="btn-next-statement">Siguiente ▶</button>
        </div>
      </div>
      <div id="dialogue-box-container">
        <div id="dialogue-box">
          <div id="speaker-tag"><span id="speaker-name">CHAPULÍN</span></div>
          <div id="dialogue-text">Texto</div>
          <div id="dialogue-arrow">▼</div>
        </div>
      </div>
      <div id="cutin-overlay" class="hidden">
        <img id="cutin-img" src="" alt="Cut-in">
      </div>
      <div id="screen-flash" class="hidden"></div>
      <div id="case-complete-overlay" class="hidden">
        <h2 id="case-complete-title">Caso concluido</h2>
        <p id="case-complete-body">Has resuelto el caso.</p>
      </div>
      <div id="confetti-container" class="hidden"></div>
      <div id="start-splash-overlay">
        <button id="btn-music-player" class="splash-lang-corner splash-music-corner">♫</button>
        <button id="btn-lang-splash">IDIOMA</button>
        <div id="music-player-modal" class="game-modal hidden">
          <div class="modal-window music-player-window">
            <div class="modal-header">
              <h2 id="music-player-title">BANDA SONORA</h2>
              <button id="btn-close-music-player" class="close-btn">X</button>
            </div>
            <div class="music-player-body">
              <div class="music-player-album">
                <p id="music-player-now-playing">—</p>
                <div class="music-player-transport">
                  <button id="btn-music-prev">⏮</button>
                  <button id="btn-music-play">▶</button>
                  <button id="btn-music-pause">⏸</button>
                  <button id="btn-music-stop">⏹</button>
                  <button id="btn-music-next">⏭</button>
                </div>
                <div id="music-player-seek"><div id="music-player-seek-fill"></div></div>
              </div>
              <ol id="music-player-track-list"></ol>
            </div>
          </div>
        </div>
        <button id="btn-continue-game" class="hidden">CONTINUAR</button>
        <button id="btn-start-case0">CASO 0</button>
        <button id="btn-start-game">COMENZAR</button>
        <button id="btn-start-case2">CASO 2</button>
        <button id="btn-start-case3">CASO 3</button>
        <button id="btn-start-case4">CASO 4</button>
        <button id="btn-start-case5">CASO 5</button>
        <button id="btn-start-trial-debug">MODO DEBUG</button>
      </div>
      <div id="court-record-modal" class="game-modal hidden">
        <button id="btn-close-record">X</button>
        <p id="court-record-present-prompt" class="hidden"></p>
        <div id="court-record-tabs" class="record-tabs hidden">
          <button id="tab-evidence" class="record-tab active">PRUEBAS</button>
          <button id="tab-profiles" class="record-tab">PERSONAS</button>
        </div>
        <div id="evidence-grid"></div>
        <img id="evidence-icon-preview" src="" alt="Item" class="hidden">
        <h3 id="evidence-title"></h3>
        <p id="evidence-role-line" class="hidden"></p>
        <p id="evidence-description"></p>
        <button id="btn-evidence-examine" style="display:none;">Examinar Detalle</button>
        <button id="btn-modal-present" style="display:none;">¡Presentar!</button>
        <button id="btn-modal-present-profile" style="display:none;">¡Señalar a esta persona!</button>
      </div>
      <div id="evidence-examine-modal" class="game-modal hidden">
        <div class="modal-window">
          <div class="modal-header">
            <h2 id="evidence-examine-title">Examinar Detalle</h2>
            <button id="btn-close-examine" class="close-btn">X</button>
          </div>
          <p id="evidence-examine-caption"></p>
          <div id="evidence-examine-stage">
            <img id="evidence-examine-image" alt="Detalle">
            <div id="evidence-examine-zones"></div>
          </div>
        </div>
      </div>
      <div id="present-point-overlay" class="game-modal hidden">
        <div class="modal-window">
          <h2 id="present-point-prompt"></h2>
          <div id="present-point-stage">
            <img id="present-point-image" alt="Señalar">
          </div>
        </div>
      </div>
      <div id="talk-options-modal" class="game-modal hidden">
        <button id="btn-close-talk">X</button>
        <div id="talk-options-list"></div>
      </div>
      <div id="move-locations-modal" class="game-modal hidden">
        <div class="modal-header"><h2>DESPLAZARSE</h2></div>
        <button id="btn-close-move">X</button>
        <div id="move-locations-list"></div>
      </div>
      <div id="save-slot-modal" class="game-modal hidden">
        <div class="modal-window save-slot-window">
          <div class="modal-header">
            <h2 id="save-slot-title">GUARDAR</h2>
            <button id="btn-close-save-slots" class="close-btn">X</button>
          </div>
          <div id="save-slot-list" class="save-slot-list"></div>
        </div>
      </div>
      <div id="history-modal" class="game-modal hidden">
        <div class="modal-window">
          <div class="modal-header"><h2>HISTORIAL</h2><button id="btn-close-history" class="close-btn">X</button></div>
          <div class="modal-body"><div id="history-list"></div></div>
        </div>
      </div>
      <div id="choice-prompt-modal" class="game-modal hidden">
        <div class="modal-window" style="width: 550px; height: auto;">
          <div class="modal-header">
            <h2 id="choice-prompt-question"></h2>
          </div>
          <div id="choice-prompt-list"></div>
        </div>
      </div>
    </div>
  `;

  return getDomElements();
}
