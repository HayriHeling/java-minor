import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-input/paper-input.js';
import './shared-styles.js';

class LaptopDashboard extends PolymerElement {
    static get template(){
        return html`
        <style include="shared-styles">
            :host {
                display: block;
                padding: 10px;
            }

            .section .card {
                width: 230px;
                float: left;
                text-align: center;
            }

            .section {
                width: 100%;
                height: 300 px;
                float: left;
            }

            .circle {
                background-color: #4D4D4D;
                width: 100px;
                height: 100px;
                font-size: 56px;
                line-height: 105px;
                margin-left: 65px;
            }

            .main {
                width: 100%;
                height: 300px;
                float: left;
            }

            h3 {
                color: #4D4D4D;
            }
        </style>

        <iron-ajax
            auto
            id="api"
            url="http://127.0.0.1/api/laptops"
            handle-as="json"
            method="{{method}}"
            body="{{body}}"
            on-response="_response"
            debounce-duration="300">
        </iron-ajax>
        
        <div class="section">
            <div class="card">
                <h3>Aantal laptops</h3>
                <div class="circle">{{laptopsCount}}</div>
            </div>
            <div class="card">
                <h3>Aantal klanten</h3>
                <div class="circle"></div>
            </div>
            <div class="card">
                <h3>Bestellingen</h3>
                <div class="circle"></div>
            </div>
            <div class="card">
                <h3>Winst</h3>
                <div class="circle"></div>
            </div>
        </div>
        <div class="main">
            <div class="card">
                <form id="form" is="iron-form">
                    <paper-input id="laptopName" name="laptopName" label="Naam laptop"></paper-input>
                    <paper-input id="laptopPrice" name="laptopPrice" label="Prijs laptop"></paper-input>
                    <paper-input id="laptopBuildyear" name="laptopBuildyear" label="Bouwjaar laptop"></paper-input>
                    <paper-input id="laptopColor" name="laptopColor" label="Kleur laptop"></paper-input>
                    <paper-input id="laptopCpu" name="laptopCpu" label="Cpu laptop"></paper-input>
                    <paper-input id="laptopStorage" name="laptopStorage" label="Opslag laptop"></paper-input>
                    <paper-input id="laptopRam" name="laptopRam" label="Ram laptop"></paper-input>
                    <paper-button id="button" class="buttonSend" on-tap="_addLaptop">Versturen</paper-button>
                </form>
            </div>
        </div>
        `;
    }

    constructor(){
        super();
    }

    _response(event, request) {  
        let _response = request.response;
        
        //Alle laptops
        this.laptopsCount = _response.laptops.length;
    }

    _addLaptop() {
        this.laptop = {
            id: (this.laptopsCount + 1),
            name: this.$.laptopName.value,
            price: this.$.laptopPrice.value,
            buildyear: this.$.laptopBuildyear.value,
            color: this.$.laptopColor.value,
            cpu: this.$.laptopCpu.value,
            storage: this.$.laptopStorage.value,
            ram: this.$.laptopRam.value
        } 

        this.method = "POST";
        this.body = JSON.stringify(this.laptop);
    }
}

window.customElements.define('laptop-dashboard', LaptopDashboard);