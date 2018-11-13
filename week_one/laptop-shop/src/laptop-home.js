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

        
      </style>

      <template is="dom-repeat" items="[[laptops]]">
        <div class="card">
          <div class="circle">[[item.id]]</div>
          <h1>[[item.name]] | € [[item.price]],-</h1>
          <ul>
            <li><b>Bouwjaar:</b> [[item.buildyear]]</li>
            <li><b>Kleur:</b> [[item.color]]</li>
            <li><b>GPU:</b> [[item.cpu]]</li>
            <li><b>Opslag:</b> [[item.storage]]</li>
            <li><b>RAM:</b> [[item.ram]]</li>
          </ul>
          <a href="/configuration/[[item.id]]">
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
    this.laptops = [{
      id: 1,
      name: "HP",
      buildyear:  "2007",
      color: "Blauw",
      price: 560,
      cpu: "i5",
      storage: "500GB SSD",
      ram: "4GB"
    },
    {
      id: 2,
      name: "Acer",
      buildyear: "2010",
      color: "Roze",
      price: 780,
      cpu: "i5",
      storage: "250GB SSD",
      ram: "8GB"
    },
    {
      id: 3,
      name: "Asus",
      buildyear: "2014",
      color: "Groen",
      price: 499,
      cpu: "i3",
      storage: "124GB SSD",
      ram: "2GB"
    }];
  }
}
/* Register the new element with the browser */
window.customElements.define('laptop-home', Home);