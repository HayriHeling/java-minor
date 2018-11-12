import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';

/* Extend the base PolymerElement class */
class Home extends PolymerElement {
  /* Define a template for the new element */
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <template is="dom-if" items="[[computers]]">
        <div class="card">
          <div class="circle">[[item.id]]</div>
          <h1>[[item.name]]</h1>
          <ul>
            <li><b>Bouwjaar:</b> [[item.buildyear]]</li>
            <li><b>Kleur:</b> [[item.color]]</li>
            <li><b>Specificaties:</b> [[item.specs]]</li>
          </ul>
          <button>Configureren</button>
          <button>Bestellen</button>
        </div>
      </template>
    `;
  }

  constructor() {
    super();
    this._setup();
  }
  
  _setup() {
    
  }

  _change() {

  }
}
/* Register the new element with the browser */
window.customElements.define('laptop-home', Home);