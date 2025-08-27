import checkboxHTML from './checkbox.html?raw'
import './checkbox.scss'

// Checkbox component: a customizable checkbox or radio button (its depends on the "type" prop (radio or checkbox))
export function Checkbox(props = {}) {
  console.log("Checkbox component loaded")

  const wrapper = document.createElement('div')
  wrapper.innerHTML = checkboxHTML.trim()

  const checkbox = wrapper.firstChild

  if (props.id) checkbox.querySelector('input').id = props.id
  if (props.label) checkbox.querySelector('label').innerText = props.label
  if (props.checked) checkbox.querySelector('input').checked = props.checked
  if (props.type) checkbox.querySelector('input').type = props.type

  return checkbox
}
