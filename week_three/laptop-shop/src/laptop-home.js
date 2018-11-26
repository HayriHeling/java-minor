import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/iron-ajax/iron-ajax.js';
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

      <iron-ajax
        auto
        method="{{method}}"
        url="{{url}}"
        handle-as="json"
        last-response="{{response}}"
        debounce-duration="300">
      </iron-ajax>

      <template is="dom-repeat" items="{{response.laptops}}">
      <div class="ownBlock">
        <div class="card">
          <div class="circle">[[item.id]]</div>
          <h1>[[item.name]] | € [[item.price]],-</h1>
          <ul>
            <li><b>Bouwjaar:</b> [[item.buildyear]]</li>
            <li><b>Kleur:</b> [[item.color]]</li>
            <li><b>CPU:</b> [[item.cpu]]</li>
            <li><b>Opslag:</b> [[item.storage]] GB SSD</li>
            <li><b>RAM:</b> [[item.ram]] GB</li>
          </ul>
            <a href="/configuration/[[item.id]]">
              <paper-button toggles raised class="buttonConfig">Configureren</paper-button>
            </a>
        </div>
      </div>
      </template>
    `;
  }

  constructor() {
    super();
    this.url ="http://127.0.0.1/api/laptops";
  }
}
/* Register the new element with the browser */
window.customElements.define('laptop-home', Home);