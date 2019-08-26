import './index.scss'
import AccordionItem from '../Accordion-item'
const DEFAULT_CONFIG = {
  maxHeight: '9e99px',
  withTransition: true,
  withAutoClose: true,
  onToggle: () => {}
}
export class Accordion {
  constructor(element, config = DEFAULT_CONFIG) {
    this.element = document.getElementById(element)
    this.config = Object.assign({...DEFAULT_CONFIG}, config)
    this.accordionItems = []
    if (this.element.tagName.toLowerCase() === 'dl') {
      this.init()
    } else {
      throw new Error('Revise structure of accordion')
    }
  }

  init() {
    this.element.classList.add('JsAccordion')
    this.update()
    if (this.config.withTransition) {
      this.element.classList.add('JsAccordion--withTransition')
    }
  }

  update() {
    const headers = this.element.querySelectorAll('dt')
    this.accordionItems = [...headers].map((header, i) => {
      const accordion = new AccordionItem(
        header,
        header.nextElementSibling,
        this.config
      )

      accordion.header.addEventListener(
        'click',
        () => this.toggleAccordion(accordion),
        false
      )
      return accordion
    })
  }

  toggleAccordion(accordion) {
    if (accordion.opened) {
      accordion.close()
    } else {
      if (this.config.withAutoClose) {
        this.accordionItems.map(item => item.close())
      }
      accordion.open()
    }
    this.config.onToggle(this)
  }
}

export default Accordion
