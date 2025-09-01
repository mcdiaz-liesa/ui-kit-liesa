import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import { LiesaButton, LiesaCheckbox } from '@cdiaz-liesa/ui-kit-liesa'
import '@cdiaz-liesa/ui-kit-liesa'

document.querySelector('#app').innerHTML = `
  <div>
    <liesa-button id="ohana" label="hola">asdasd</liesa-button>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs liesa-form-label">
      Click on the Vite logo to learn more
    </p>
    <liesa-checkbox></liesa-checkbox>
  </div>
`

setupCounter(document.querySelector('#counter'))
