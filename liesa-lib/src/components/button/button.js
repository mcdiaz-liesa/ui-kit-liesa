import buttonHTML from './button.html?raw'
import buttonSCSS from './button.scss?inline'

class LiesaButton extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open'})
    this.shadowRoot.innerHTML = `
      <style>${buttonSCSS}</style>
      ${buttonHTML.trim()}`
  }

  connectedCallback() {
    const btn = this.shadowRoot.querySelector('button')

    if (this.hasAttribute('id')) {
      btn.setAttribute('id', this.getAttribute('id'))
    }
    if (this.hasAttribute('label')) {
      btn.innerHTML = this.getAttribute('label')
    }
  }
}

customElements.define('liesa-button', LiesaButton)

export { LiesaButton }
