import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import { LiesaButton, LiesaCheckbox } from '@cdiaz-liesa/ui-kit-liesa'


document.querySelector('#app').innerHTML = `
  <div>
    <liesa-button id="ohana" label="Esto es un cambio algo importante">asdasd</liesa-button>
    <liesa-checkbox id="es-un-id"></liesa-checkbox>
  </div>
`

setupCounter(document.querySelector('#counter'))
