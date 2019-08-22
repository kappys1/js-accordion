import './index.scss'
import AccordionItem from '../Accordion-item'

export class Accordion {
  constructor(element) {
    this.element = document.getElementById(element)
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
      header => new AccordionItem(header, header.nextElementSibling)
    )
    this.accordionItems.map(item => {
      item.header.addEventListener('click', () => this.toggleAccordion(item))
    })
  }

  toggleAccordion(accordion) {
    if (accordion.opened) {
      accordion.close()
    } else {
      this.accordionItems.map(item => item.close())
      accordion.open()
    }
  }
}

export default Accordion
