import './index.scss'
import AccordionItem from '../Accordion-item'
const DEFAULT_CONFIG = {
  maxHeight: '9e99px',
  transition: true,
  autoClose: true,
  onToggle: () => {}
}
export class Accordion {
  constructor(element, config = DEFAULT_CONFIG) {
    this.element = document.getElementById(element)
    this.config = Object.assign(DEFAULT_CONFIG, config)
    if (this.element.tagName.toLowerCase() === 'dl') {
      this.init()
    } else {
      throw new Error('Revise structure of accordion')
    }
  }

  init() {
    this.element.classList.add('JsAccordion')
    const headers = this.element.querySelectorAll('dt')
    this.accordionItems = [...headers].map(
      header =>
        new AccordionItem(header, header.nextElementSibling, this.config)
    )
    this.accordionItems.map(item => {
      item.header.addEventListener('click', () => this.toggleAccordion(item))
    })
    if (this.config.transition) {
      this.element.classList.add('JsAccordion--withTransition')
    }
  }

  toggleAccordion(accordion) {
    if (accordion.opened) {
      accordion.close()
    } else {
      if (this.config.autoClose) {
        this.accordionItems.map(item => item.close())
      }
      accordion.open()
    }
    this.config.onToggle(this)
  }
}

export default Accordion
