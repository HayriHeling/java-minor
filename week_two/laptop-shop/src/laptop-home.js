import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/iron-ajax/iron-ajax.js';
import './shared-styles.js';

let _response;

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
      <div class="ownBlock">
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
      </div>
      </template>

      <iron-ajax
        auto
        url="http://127.0.0.1/listLaptops"
        handle-as="json"
        on-response="_handleResponse"
        debounce-duration="300">
      </iron-ajax>
    `;
  }

  constructor() {
    super();
  }

  _handleResponse(event, req) {
    const res = req.response;

    console.log(res.laptops[0].id);

    this.laptops = {
      id: res.laptops[0].id
    }
  }
}
/* Register the new element with the browser */
window.customElements.define('laptop-home', Home);