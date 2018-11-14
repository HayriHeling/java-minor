import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import { Polymer } from '@polymer/polymer/polymer-legacy';

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

        h3 {

          margin-left: 20px;
        }

        .ownBlock {
          width: 50%;
          float: left;
        }

        .ownFooter {
          margin-left: 20px;
        }
      </style>
      
      <!-- First choice -->
      <target-element name="[[laptop]]">
        <div class="ownBlock">
          <h3>Dit is jouw keuze</h3>
          <div class="card">
            <div class="circle">[[laptop.id]]</div>
              <h1>[[laptop.name]] | € [[laptop.price]],-</h1>
              <ul>
                <li><b>Bouwjaar:</b> [[laptop.buildyear]]</li>
                <li><b>Kleur:</b> [[laptop.color]]</li>
                <li><b>GPU:</b> [[laptop.cpu]]</li>
                <li><b>Opslag:</b> [[laptop.storage]]</li>
                <li><b>RAM:</b> [[laptop.ram]]</li>
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
                <select id="CPU">
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
        <div class="ownFooter">
          <a href="/form">
            <paper-button toggles raised class="buttonAdd">Bestellen</paper-button>
          </a> 
        </div>
      <target-element>
    `;
  }

  constructor() {
    super();
    this._setup();
    this._setupOptions();
    this._setupLaptop();
  }
  
  _setup() {
    switch (this._getLaptopId()) {
      case '1':
      this.laptop = {
        id: 1,
        name: "HP",
        buildyear:  "2007",
        color: "Blauw",
        price: 560,
        cpu: "i5",
        storage: "500GB SSD",
        ram: "8GB"
      }
      break;

      case '2':
      this.laptop = {
        id: 2,
        name: "Acer",
        buildyear: "2010",
        color: "Roze",
        price: 780,
        cpu: "i5",
        storage: "500GB SSD",
        ram: "8GB"
      }
      break;

      case '3':
      this.laptop = {
        id: 3,
        name: "Asus",
        buildyear: "2014",
        color: "Groen",
        price: 499,
        cpu: "i5",
        storage: "500GB SSD",
        ram: "8GB"
      }
      break;

      default:
      break;
    }

    return html
  }

  _setupLaptop() {
    if(this._getLaptopId() === "1"){

    }
  }

  _change() {

  }

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

  _getLaptopId() {
    let url = window.location.href;
    let laptopId = url.substring(url.length, url.length - 1);

    return laptopId;
  }
}
/* Register the new element with the browser */
window.customElements.define('laptop-configuration', LaptopConfiguration);