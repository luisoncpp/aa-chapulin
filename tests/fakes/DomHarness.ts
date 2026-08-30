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
          <div id="health-bar"></div>
          <button id="btn-court-record"><img src="" alt="Insignia"><span>Acta</span></button>
        </div>
      </div>
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
      <div id="confetti-container" class="hidden"></div>
      <div id="start-splash-overlay">
        <button id="btn-lang-splash">IDIOMA</button>
        <button id="btn-continue-game" class="hidden">CONTINUAR</button>
        <button id="btn-start-game">COMENZAR</button>
        <button id="btn-start-case2">CASO 2</button>
        <button id="btn-start-trial-debug">MODO DEBUG</button>
      </div>
      <div id="court-record-modal" class="game-modal hidden">
        <button id="btn-close-record">X</button>
        <div id="evidence-grid"></div>
        <img id="evidence-icon-preview" src="" alt="Item" class="hidden">
        <h3 id="evidence-title"></h3>
        <p id="evidence-description"></p>
        <button id="btn-modal-present" style="display:none;">¡Presentar!</button>
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
    </div>
  `;

  return getDomElements();
}
