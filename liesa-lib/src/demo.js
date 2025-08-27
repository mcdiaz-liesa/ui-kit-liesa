import { Checkbox } from './app.js'
import { Button } from './app.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

document.addEventListener('DOMContentLoaded', () => {
  const COMPONENTS = [ 'checkbox-demo', 'button-demo' ]
  for (let element of COMPONENTS) {
    let container = document.getElementById(element)
    if (!container) {
      container = document.createElement('div')
      container.id = element
      document.body.appendChild(container)
    }

    let childContainer

    switch (element) {
      case 'checkbox-demo':
        childContainer = Checkbox({ label: 'Aceptar términos', checked: false, id: 'checkbox-id', type: 'radio' })
        break
      default:
        childContainer = Button({ label: 'Button test', id: 'otro-id' })
        break
    }
    container.appendChild(childContainer)
  }
  // let containerCheckbox = document.getElementById('checkbox-demo')
  // if (!containerCheckbox) {
  //   containerCheckbox = document.createElement('div')
  //   containerCheckbox.id = 'checkbox-demo'
  //   document.body.appendChild(containerCheckbox)
  // }

  // let containerButton = document.getElementById('button-demo')
  // if (!containerButton) {
  //   containerButton = document.createElement('div')
  //   containerButton.id = 'button-demo'
  //   document.body.appendChild(containerButton)
  // }

  // const buttonElement = Button({ label: 'Button test', id: 'otro-id' })
  // containerButton.appendChild(buttonElement)

  // const cb = Checkbox({ label: 'Aceptar términos', checked: true })
  // containerCheckbox.appendChild(cb)
})
