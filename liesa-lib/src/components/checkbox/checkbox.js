import checkboxHTML from './checkbox.html?raw'
import checkboxSCSS from './checkbox.scss?inline'


class LiesaCheckbox extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open'})
    this.shadowRoot.innerHTML = `
      <style>${checkboxSCSS}</style>
      ${checkboxHTML.trim()}`
  }

  connectedCallback() {
    const cb = this.shadowRoot.querySelector('.liesa-form-checkbox')
    const cbInput = this.shadowRoot.querySelector('input.liesa-form-input')
    const cbLabel = this.shadowRoot.querySelector('label.liesa-form-label')

    if (this.hasAttribute('id')) {
      cb.setAttribute('id', this.getAttribute('id'))
    }
    if (this.hasAttribute('label')) {
      cbLabel.innerHTML = this.getAttribute('label')
    }
    if (this.hasAttribute('checked')) {
      cbInput.setAttribute('checked', this.getAttribute('checked'))
    }
    if (this.hasAttribute('type')) {
      cbInput.setAttribute('type', this.getAttribute('type'))
    }
  }
}

customElements.define('liesa-checkbox', LiesaCheckbox)

export { LiesaCheckbox }
