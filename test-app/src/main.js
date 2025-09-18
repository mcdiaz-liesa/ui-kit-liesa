import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import { LiesaButton, LiesaCheckbox } from '@cdiaz-liesa/ui-kit-liesa'


document.querySelector('#app').innerHTML = `
  <div>
    <liesa-button id="ohana" label="Esto es un cambio muy importante">asdasd</liesa-button>
    <liesa-checkbox></liesa-checkbox>
  </div>
`

setupCounter(document.querySelector('#counter'))
