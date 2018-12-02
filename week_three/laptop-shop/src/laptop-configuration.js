import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import './shared-styles.js';

/* Extend the base PolymerElement class */
class LaptopConfiguration extends PolymerElement {
  /* Define a template for the new element */
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
        paper-button.buttonAdd {
          background: green;
          color: #fff;
        }
        li {
          list-style: none;
        }
      </style>
      
      <!-- Aanroepen van de API urls -->
      <iron-ajax
        auto
        url="http://127.0.0.1:8080/api/laptops/[[id]]"
        handle-as="json"
        on-response="_responseLaptop"
        debounce-duration="300">
      </iron-ajax>

      <iron-ajax
        auto
        url="http://127.0.0.1:8080/api/laptops/options"
        handle-as="json"
        on-response="_responseLaptopOptions"
        debounce-duration="300">
      </iron-ajax>
      
      <!-- First choice -->
      <target-element name="[[laptop]]">
        <div class="ownBlock">
          <h3>Dit is jouw keuze</h3>
          <div class="card">
            <div class="circle">[[laptop.id]]</div>
              <h1>[[laptop.name]] | € [[laptop.price]],-</h1>
              <ul>
              <li><span><b>Bouwjaar: </b></span>[[laptop.buildyear]]</li>
                <li><b>Kleur: </b><span id="laptopColor">[[laptop.color]]</span></li>
                <li><b>CPU: </b><span id="laptopCpu">[[laptop.cpu]]</span></li>
                <li><b>Opslag: </b><span id="laptopStorage">[[laptop.storage]]</span></li>
                <li><b>RAM: </b><span id="laptopRam">[[laptop.ram]]</span></li>
              </ul>
          </div>
        </div>
        <div class="ownBlock">
          <h3>Jouw keuze aanpassen?</h3>
          <div class="card">
            <div class="circle">[[laptop.id]]</div>
            <h1>[[laptop.name]] | € [[laptop.price]],-</h1>
            <ul>
            <li><b>Bouwjaar:</b> [[laptop.buildyear]]</option></select></li>
              <li>
                <paper-dropdown-menu id="color" label="Kleur">
                  <paper-listbox slot="dropdown-content" selected="0">
                    <template is="dom-repeat" items="{{color}}">
                      <paper-item>[[item]]</paper-item>
                    </template>
                  </paper-listbox>
                </paper-dropdown-menu>
              </li>    
              <li>
                <paper-dropdown-menu label="Cpu">
                  <paper-listbox slot="dropdown-content" selected="0">
                    <template is="dom-repeat" items="{{cpu}}">
                      <paper-item>[[item]]</paper-item>
                    </template>
                  </paper-listbox>
                </paper-dropdown-menu>
              </li>
              <li> 
                <paper-dropdown-menu label="Opslag">
                  <paper-listbox slot="dropdown-content" selected="0">
                    <template is="dom-repeat" items="{{storage}}">
                      <paper-item>[[item]]</paper-item>
                    </template>
                  </paper-listbox>
                </paper-dropdown-menu>
              </li> 
              <li>
                <paper-dropdown-menu label="Ram">
                  <paper-listbox slot="dropdown-content" selected="0">
                    <template is="dom-repeat" items="{{ram}}">
                      <paper-item>[[item]]</paper-item>
                    </template>
                  </paper-listbox>
                </paper-dropdown-menu>
              </li>
            </ul>
          </div>
        </div>
        <div class="ownBlock">
          <div class="ownFooter">
            <a href="/form/[[laptop.id]]">
              <paper-button toggles raised class="buttonAdd" on-tap="_saveSettings">Bestellen</paper-button>
            </a> 
          </div>
        </div>
        <div class="ownBlock">
        <div class="ownFooter">
            <paper-button toggles raised class="buttonAdd" on-tap="_changeSettings">Aanpassen</paper-button>
        </div>
      </div>
      <target-element>
    `;
  }

  constructor() {
    super();
    this.id = this._getLaptopId();
    //this._setupOptions();
  }
  
  /*Veranderen van de settings van de laptop*/
  _changeSettings() {
    this.laptop = {
      id: this.laptop.id,
      name: this.laptop.name,
      price: this.laptop.price,
      buildyear: this.laptop.buildyear,
      color: this.$.color.value,
      cpu: this.$.cpu.value,
      storage: this.$.storage.value,
      ram: this.$.ram.value
    }
  }

  _saveSettings(){
    this.laptop = {
      id: this.laptop.id,
      name: this.laptop.name,
      price: this.laptop.price,
      buildyear: this.laptop.buildyear,
      color: this.shadowRoot.getElementById('laptopColor').innerHTML,
      cpu: this.shadowRoot.getElementById('laptopCpu').innerHTML,
      storage: this.shadowRoot.getElementById('laptopStorage').innerHTML,
      ram: this.shadowRoot.getElementById('laptopRam').innerHTML
    }
    localStorage.setItem("laptop", JSON.stringify(this.laptop));
  }

  /*Inladen van de dropdown componenten en data*/
  _setupOptions() {
    this.color = {
      green: "Groen",
      blue: "Blauw",
      red: "Rood"
    }
    this.cpu = {
      i3: "i3",
      i5: "i5",
      i7: "i7"
    }
    this.storage = {
      gb124: "124GB SSD",
      gb250: "250GB SDD",
      gb500: "500GB SSD"
    }
    this.ram = {
      gb2: "2GB",
      gb4: "4GB",
      gb8: "8GB"
    }
  }

  /*Verkrijg het id van de laptop uit de url*/
  _getLaptopId() {
    let url = window.location.href;
    let laptopId = url.substring(url.length, url.length - 1);

    return laptopId;
  }

  _responseLaptop(event, req) {
    const laptop = req.response;
    console.log(laptop);  
  
    //Object met de data van de API vullen
    this.laptop = {
      id: laptop.id,
      name: laptop.brand,
      price: laptop.price,
      buildyear: laptop.buildyear,
      color: laptop.color,
      cpu: laptop.cpu,
      storage: laptop.storage,
      ram: laptop.ram
    }
  }

  _responseLaptopOptions(event, req) {
    const laptopOptions = req.response;
    console.log(laptopOptions);  

    this.color = laptopOptions.color;
    this.cpu = laptopOptions.cpu;
    this.storage = laptopOptions.storage;
    this.ram = laptopOptions.ram;
  }
}
/* Het element registreren naar de browser */
window.customElements.define('laptop-configuration', LaptopConfiguration);