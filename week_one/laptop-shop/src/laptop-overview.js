import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import './shared-styles.js';

/* Extend the base PolymerElement class */
class Overview extends PolymerElement {
  /* Define a template for the new element */
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }

        paper-button.buttonAbort {
          background: #FF0800;
          color: #fff;
        }

        paper-button.buttonAccept {
            background: #5BC235;
            color: #fff;
          }
           
      </style>
        <div class="card">
          <a href="/home">
            <paper-button toggles raised class="buttonAbort">Afwijzen</paper-button>
          </a> 
          <br>
          <a href="/#">
            <paper-button toggles raised class="buttonAccept">Akkoord</paper-button>
          </a> 
        </div>
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
window.customElements.define('laptop-overview', Overview);