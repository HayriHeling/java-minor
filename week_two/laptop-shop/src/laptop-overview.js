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

        paper-button.buttonDecline {
          background: #FF0800;
          color: #fff;
          margin-left: 25px;
        }

        paper-button.buttonAccept {
            background: #5BC235;
            color: #fff;
            margin-left: 25px;
        }

        h1 {
          margin-left: 25 px;
        }
           
      </style>
      <h1>Gaat u akkoord?</h1>
      <div class="ownBlock">
        <target-element name="[[person]]">
          <div class="card">
            <h2>Jouw persoonlijke gegevens</h2>
            <p><b>Voornaam: </b>[[person.firstname]]</p>
            <p><b>Achternaam: </b>[[person.lastname]]</p>
            <p><b>Adres: </b>[[person.adres]]</p>
            <p><b>Postcode: </b>[[person.zipcode]]</p>
            <p><b>Woonplaats: </b>[[person.place]]</p>
            <p><b>Email: </b>[[person.email]]</p>
            <p><b>Iban: </b>[[person.iban]]</p>
          </div>
          <paper-button class="buttonAccept" on-tap="_acceptForm">Accepteren</paperbutton>
          </div>
        </target-element>
        <div class="ownBlock">
        <target-element name="[[laptop]]">
          <div class="card">
            <h2>[[laptop.name]] | € [[laptop.price]],-</h2>
            <p><b>Bouwjaar: </b>[[laptop.buildyear]]</p>
            <p><b>Kleur: </b>[[laptop.color]]</p>
            <p><b>CPU: </b>[[laptop.cpu]]</p>
            <p><b>Opslag: </b>[[laptop.storage]]</p>
            <p><b>Ram: </b>[[laptop.ram]]</p>
          </div>
        <target-element>
          <paper-button class="buttonDecline" on-tap="_declineForm">Afwijzen</paperbutton>
        </div>
    `;
  }

  constructor() {
    super();
    this._setup();
  }
  
  _setup() {
    let personLocalstorage = JSON.parse(localStorage.getItem("person"));
    let laptopLocalstorage = JSON.parse(localStorage.getItem("laptop"));

    this.person = {
      id: personLocalstorage.laptopId,
      firstname: personLocalstorage.firstname,
      lastname: personLocalstorage.lastname,
      adres: personLocalstorage.adres,
      zipcode: personLocalstorage.zipcode,
      place: personLocalstorage.place,
      email: personLocalstorage.email,
      iban: personLocalstorage.iban
    }

    this.laptop = {
      id: laptopLocalstorage.laptopId,
      name: laptopLocalstorage.name,
      price: laptopLocalstorage.price,
      buildyear: laptopLocalstorage.buildyear,
      color: laptopLocalstorage.color,
      cpu: laptopLocalstorage.cpu,
      storage: laptopLocalstorage.storage,
      ram: laptopLocalstorage.ram
    }
  }

  _acceptForm(){
    alert('Bedankt voor uw aankoop');
  }

  _declineForm(){
    location.href="/home";
  }
}
/* Register the new element with the browser */
window.customElements.define('laptop-overview', Overview);