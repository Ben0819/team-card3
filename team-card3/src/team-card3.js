import {LitElement, html} from 'lit';

export class MyElement extends LitElement {
  static properties() {
    return {
    version: {
      type: String,
      reflect: true
    }
  }
  }

  static get styles() {
    return css`
    :host {
      font-size: 2em;
    }
    `;
  }

  constructor() {
    super();
    this.version = 'STARTING';
  }

  render() {
    return html`
<div class="card">
  <style>
    button:hover {
      background-color: blue;
    }

    button:focus {
      background-color: blue;
    }
  </style>
 <img src="https://sportshub.cbsistatic.com/i/r/2022/06/10/139ab78f-d458-4a66-9179-0312585bfbfa/thumbnail/1200x675/f403faf31c079bf1f1206f8e8b96660e/tastumcbs.jpg">
    <div class="heading">
      <h4><b>NBA FINALS 2022 Warriors vs Celtics</b></h4>
      <p class="par show">A shot of Jayson Tatum getting blocked by Andrew Wiggins during the 2022 finals</p>
      <a> <button onclick="document.querySelector('.par').classList.toggle('show');">DETAILS</button>
      </a>
    </div>
    </div>
    

    `;
  }
}
customElements.define('my-element', MyElement);
