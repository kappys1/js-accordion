import {Accordion} from '../../lib/index'
import '../styles/index.scss'

document.addEventListener('DOMContentLoaded', function() {
  const config = {
    maxHeight: '300px',
    onToggle: evt => console.log(evt)
  }
  const acc = new Accordion('accordion', config)
  console.log(acc)
})
