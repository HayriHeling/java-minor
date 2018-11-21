import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax/iron-ajax.js';
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
      </style>

      <iron-ajax
        auto
        method="{{method}}"
        url="{{url}}"
        handle-as="json"
        on-response="_handleResponse"
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
            <target-element name="[[color]]"> 
              <li>
                <b>Kleur:</b>
                <select id="color">
                  <option value="[[color.green]]">[[color.green]]</option>
                  <option value="[[color.blue]]">[[color.blue]]</option>
                  <option value="[[color.red]]">[[color.red]]</option>
                </select>
              </li>
            </target-element>
            <target-element name="[[cpu]]">
              <li>
                <b>CPU:</b> 
                <select id="cpu">
                  <option value="[[cpu.i3]]">[[cpu.i3]]</option>
                  <option value="[[cpu.i5]]">[[cpu.i5]]</option>
                  <option value="[[cpu.i7]]">[[cpu.i7]]</option>
                </select>
              </li>
            </target-element>
            <target-element name="[[storage]]">
              <li> 
                <b>Opslag:</b>
                <select id="storage">
                  <option value="[[storage.gb124]]">[[storage.gb124]]</option>
                  <option value="[[storage.gb250]]">[[storage.gb250]]</option>
                  <option value="[[storage.gb500]]">[[storage.gb500]]</option>
                </select>
              </li>
            </target-element>
            <target-element name="[[ram]]">
              <li>
                <b>RAM:</b>
                <select id="ram">
                  <option value="[[ram.gb2]]">[[ram.gb2]]</option>
                  <option value="[[ram.gb4]]">[[ram.gb4]]</option>
                  <option value="[[ram.gb8]]">[[ram.gb8]]</option>
                </select>
              </li>
            </target-element>  
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
    this._setMethodAndRequest();
    this._setupOptions();
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

  _setMethodAndRequest() {
    this.method = "GET";
    this.url = "http://127.0.0.1/api/laptops/" + this._getLaptopId();
  }

  _handleResponse(event, req) {
    const laptop = req.response;
    
    //Object met de data van de API vullen
    this.laptop = {
      id: laptop.id,
      name: laptop.name,
      price: laptop.price,
      buildyear: laptop.buildyear,
      color: laptop.color,
      cpu: laptop.cpu,
      storage: laptop.storage,
      ram: laptop.ram
    }
  }
}
/* Het element registreren naar de browser */
window.customElements.define('laptop-configuration', LaptopConfiguration);