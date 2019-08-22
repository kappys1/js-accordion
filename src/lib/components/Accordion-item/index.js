import './index.scss'

export class AccordionItem {
  constructor(header, content) {
    this.opened = false
    this.header = header
    this.header.classList.add('JsAccordion-header')
    if (content.nodeName.toLowerCase() === 'dd') {
      this.content = content
      this.content.classList.add('JsAccordion-body')
      this.close()
    }
  }

  toggle() {
    if (this.opened) {
      this.close()
    } else {
      this.open()
    }
  }

  close() {
    this.opened = false
    this.header.classList.remove('JsAccordion-header--opened')
    if (this.content) {
      this.content.style.height = '0px'
    }
  }

  open() {
    this.opened = true
    this.header.classList.add('JsAccordion-header--opened')
    if (this.content) {
      this.content.style.height = `${this.content.scrollHeight}px`
    }
  }
}

export default AccordionItem
