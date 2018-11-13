import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-form/iron-form.js';
import './shared-styles.js';
import { PaperInputBehavior } from '@polymer/paper-input/paper-input-behavior';

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

        .buttonAdd {
            background: green;
            color: #fff;
        }
      </style>

    <div class="card">
        <form id="form" is="iron-form">
            <paper-input label="Voornaam" required auto-validate pattern="[a-zA-Z]*" error-message="Vul je voornaam in"></paper-input>
            <paper-input label="Achternaam" required auto-validate pattern="[a-zA-Z]*" error-message="Vul je achternaam in"></paper-input>
            <paper-input label="Adres" required error-message="Vul een juiste postcode in."></paper-input>
            <paper-input label="Postcode" required auto-validate pattern="[a-zA-Z2]" error-message="Vul een juiste postcode in."></paper-input>
            <paper-input label="Woonplaats" required error-message="Vul een juiste postcode in."></paper-input>
            <paper-input label="Email" required error-message="Vul een juiste postcode in."></paper-input>
            <paper-input label="IBAN" required error-message="Vul een juiste postcode in." ></paper-input>
            <paper-button on-tap="_submitForm">Versturen</paper-button>
        </form>
    </div>
    `;
  }

  constructor() {
    super();
  }

  _submitForm(){    

  }
}
/* Register the new element with the browser */
window.customElements.define('laptop-form', Form);