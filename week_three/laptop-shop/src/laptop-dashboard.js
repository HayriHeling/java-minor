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
            
            .section {
                width: 50%;
                height: 300px;
                float: left;
            }

            .cardSection {
                width: 37%;
                float: left;
            }

            .cardTable {
                margin-top: 100px;
            }

            .circle {
                margin-left: 90px;
                height: 50px;
                width: 50px;
                line-height: 50px;
                font-size: 32px;
            }

            .buttonSend {
                margin-left: 20px;
            }

            .buttonDelete {
                color: red;
            }

            h3 {
                color: #4D4D4D;
                text-align: center;
                margin-left: -5px;
            }
        </style>

        <iron-ajax
            auto
            id="api"
            url="http://127.0.0.1:8080/api/laptops"
            handle-as="json"
            method="{{method}}"
            body="{{body}}"
            on-response="_response"
            debounce-duration="300">
        </iron-ajax>
        
        <div class="section">
            <div class="card cardSection">
                <h3>Aantal laptops</h3>
                <div class="circle">{{laptopsCount}}</div>
            </div>
            <div class="card cardSection">
                <h3>Aantal klanten</h3>
                <div class="circle"></div>
            </div>
            <div class="card cardSection">
                <h3>Bestellingen</h3>
                <div class="circle"></div>
            </div>
            <div class="card cardSection">
                <h3>Winst</h3>
                <div class="circle"></div>
            </div>
        </div>
        <div class="section">
            <div class="card">
                <form id="form" is="iron-form">
                    <paper-input id="laptopName" name="laptopName" label="Naam laptop"></paper-input>
                    <paper-input id="laptopPrice" name="laptopPrice" label="Prijs laptop"></paper-input>
                    <paper-input id="laptopBuildyear" name="laptopBuildyear" label="Bouwjaar laptop"></paper-input>
                    <paper-input id="laptopColor" name="laptopColor" label="Kleur laptop"></paper-input>
                    <paper-input id="laptopCpu" name="laptopCpu" label="Cpu laptop"></paper-input>
                    <paper-input id="laptopStorage" name="laptopStorage" label="Opslag laptop"></paper-input>
                    <paper-input id="laptopRam" name="laptopRam" label="Ram laptop"></paper-input>
                </form>
            </div>
            <paper-button id="button" class="buttonSend" on-tap="_addLaptop">Toevoegen</paper-button>
        </div>  
        <div class="section">
        <div class="card cardTable">
            <table>       
                <template is="dom-repeat" items="{{response.laptops}}">       
                    <tr>
                        <td id="[[item.id]]">[[item.name]]</td>
                        <td><paper-button class="buttonDelete" on-tap="_deleteLaptop">X</paper-button></td>
                    </tr>  
                </template>    
            </table>
            </div>
        </div>
        </template>
        `;
    }

    constructor(){
        super();
    }

    _response(event, request) {  
        //Gebruiken voor de dom-repeat template
        this.response = request.response;

        //Gebruiken voor andere responses
        let response = request.response;
        
        //Alle laptops
        this.laptopsCount = response.length;
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
        console.log(this.body);
        setTimeout("location.href = '/dashboard'", 1000);
    }

    _deleteLaptop() {
        
    }
}

window.customElements.define('laptop-dashboard', LaptopDashboard);