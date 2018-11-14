import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { PaperInputBehavior } from '@polymer/paper-input/paper-input-behavior';
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
                <paper-input name="firstname" label="Voornaam" required auto-validate pattern="[a-zA-Z-]*" error-message="Vul je voornaam in"></paper-input>
                <paper-input label="Achternaam" required auto-validate pattern="[a-zA-Z]*" error-message="Vul je achternaam in"></paper-input>
                <paper-input label="Adres" required auto-validate pattern="[A-Z 0-9]*" maxlength="7" error-message="Vul een juiste adres in."></paper-input>
                <paper-input label="Postcode" required auto-validate pattern="[a-zA-Z 0-9]*" error-message="Vul een juiste postcode in."></paper-input>
                <paper-input label="Woonplaats" required auto-validate pattern="[a-zA-Z]*" error-message="Vul een juiste woonplaats in."></paper-input>
                <paper-input label="Email" required auto-validate pattern="[a-zA-Z@.]*" error-message="Vul een juiste email in."></paper-input>
                <paper-input label="IBAN" required auto-validate pattern="[A-Z0-9]*" maxlength="34" error-message="Vul een juist IBAN-nummer in." ></paper-input>
                <paper-button class="buttonSend" disabled="[[isDisabled]]" on-tap="_submitForm">Versturen</paper-button>
            </form>
        </div>
      </dom module>
      `;
  }

  constructor() {
    super();
    this.isDisabled = true;
  }

  _submitForm(){ 
    location.href= "/overview";
  }

  _formIsFilledIn(){
    this.isDisabled = false;
  }
}
/* Register the new element with the browser */
window.customElements.define('laptop-form', Form);