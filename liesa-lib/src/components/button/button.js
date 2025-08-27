// 

import buttonHTML from './button.html?raw'
import './button.scss'

export function Button(props = {}) {
  console.log("Button component loaded")

  const wrapper = document.createElement('div')
  wrapper.innerHTML = buttonHTML.trim()

  const button = wrapper.firstChild

  if (props.id) button.setAttribute('id', props.id);
  if (props.label) button.innerText = props.label;

  return button
}
