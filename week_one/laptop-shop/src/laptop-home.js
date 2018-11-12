import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import './shared-styles.js';

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

        paper-button.buttonConfig {
          background: #4285f4;
          color: #fff;
        }

        paper-button.buttonAdd {
          background: green;
          color: #fff;
        }
      </style>

      <template is="dom-repeat" items="[[computers]]">
        <div class="card">
          <div class="circle">[[item.id]]</div>
          <h1>[[item.name]]</h1>
          <ul>
            <li><b>Bouwjaar:</b> [[item.buildyear]]</li>
            <li><b>Kleur:</b> [[item.color]]</li>
            <li><b>Specificaties:</b> [[item.specs]]</li>
          </ul>
          <a href="/configuration">
            <paper-button toggles raised class="buttonConfig">Configureren</paper-button>
          </a> 
        </div>
      </template>
    `;
  }

  constructor() {
    super();
    this._setup();
  }
  
  _setup() {
    this.computers = [{
      id: 1,
      name: "HP",
      buildyear:  "2007",
      color: "Blauw",
      specs: [
        "i5",
        "500GB SSD",
        "8GB RAM"
      ]
    },
    {
      id: 2,
      name: "Acer",
      buildyear: "2010",
      color: "Roze",
      specs: [
        "i7",
        "120GB SSD",
        "8GB RAM"
      ]
    },
    {
      id: 3,
      name: "Asus",
      buildyear: "2014",
      color: "Groen",
      specs: [
        "i3",
        "120GB SSD",
        "4GB RAM"
      ]
    }];
  }
}
/* Register the new element with the browser */
window.customElements.define('laptop-home', Home);