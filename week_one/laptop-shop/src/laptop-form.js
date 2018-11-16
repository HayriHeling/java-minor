import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-form/iron-form.js';
import './shared-styles.js';


/* Extend the base PolymerElement class */
class Form extends PolymerElement{
  /* Define a template for the new element */
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }

        paper-button.buttonSend {
          background: #4285f4;
          color: #fff;
          
          margin-top: 15px;
        }

        .buttonSend disabled {
          background: #4285f42e;
        }
      </style>
      <dom module id="laptop-form">
        <div class="card">
            <form id="form" is="iron-form">
                <paper-input id="firstname" name="firstname" label="Voornaam" required auto-validate pattern="[a-zA-Z-]*" error-message="Vul je voornaam in"></paper-input>
                <paper-input id="lastname" label="Achternaam" required auto-validate pattern="[a-zA-Z]*" error-message="Vul je achternaam in"></paper-input>
                <paper-input id="adres" label="Adres" required auto-validate pattern="[a-zA-Z 0-9]*" error-message="Vul een juiste adres in."></paper-input>
                <paper-input id="zipcode" label="Postcode" required auto-validate pattern="[A-Z 0-9]*" maxlength="7" error-message="Vul een juiste postcode in."></paper-input>
                <paper-input id="place" label="Woonplaats" required auto-validate pattern="[a-zA-Z]*" error-message="Vul een juiste woonplaats in."></paper-input>
                <paper-input id="email" label="Email" required auto-validate pattern="[a-zA-Z@.]*" error-message="Vul een juiste email in."></paper-input>
                <paper-input id="iban" label="IBAN" required auto-validate pattern="[A-Z0-9]*" maxlength="34" error-message="Vul een juist IBAN-nummer in." ></paper-input>
                <paper-button id="button" class="buttonSend" on-tap="_formIsFilledIn">Versturen</paper-button>
            </form>
        </div>
      </dom module>
      `;
  }

  constructor() {
    super();

    setTimeout(() => {
      this._formIsFilledIn();
    });

    this._getLaptopId();
  }

  _submitForm(){ 
    location.href= "/overview/" + this._getLaptopId();
  }

  _returnGlobalErrorMessage(){
    alert("Vul alles in gek");
  }

  _formIsFilledIn(){
    let firstname = this.shadowRoot.getElementById('firstname').value;
    let lastname = this.shadowRoot.getElementById('lastname').value;
    let adres = this.shadowRoot.getElementById('adres').value;
    let zipcode = this.shadowRoot.getElementById('zipcode').value;
    let place = this.shadowRoot.getElementById('place').value;
    let email = this.shadowRoot.getElementById('email').value;
    let iban = this.shadowRoot.getElementById('iban').value;

    if (firstname == "" || lastname == "" || adres == "" || zipcode == "" || place == "" || email == "" || iban == "") {
      this._returnGlobalErrorMessage();
    }
    else {
      this._setPeronalDetails();
      this._submitForm();
    }
  }

  _setPeronalDetails(){
    this.person = {
      laptopId: this._getLaptopId(),
      firstname: this.firstname,
      lastname: this.lastname,
      adres: this.adres,
      zipcode: this.zipcode,
      place: this.place,
      email: this.email,
      iban: this.iban
    }

    console.log(this.person);
    return this.person;
  }

  /*Verkrijg de id van de url*/
  _getLaptopId() {
    let url = window.location.href;
    let laptopId = url.substring(url.length, url.length - 1);

    return laptopId;
  }
}
/* Register the new element with the browser */
window.customElements.define('laptop-form', Form);