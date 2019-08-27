import './index.scss'

export class AccordionItem {
  constructor(header, content, config = {}) {
    this.opened = false
    this.header = header
    this.config = config
    this.header.classList.add('JsAccordion-header')
    if (content) {
      if (content.nodeName.toLowerCase() === 'dd') {
        this.content = content
        if (!this.content.classList.contains('JsAccordion-body')) {
          this.content.classList.add('JsAccordion-body')
          this.close()
        }
      }
    }
  }

  close() {
    this.opened = false
    this.header.classList.remove('JsAccordion-header--opened')
    if (this.content) {
      this.content.classList.remove('JsAccordion-body--opened')
      this.content.style.maxHeight = '0px'
    }
  }

  open() {
    this.opened = true
    this.header.classList.add('JsAccordion-header--opened')
    if (this.content) {
      this.content.classList.add('JsAccordion-body--opened')
      this.content.style.maxHeight =
        this.config.maxHeight !== '9e99px'
          ? this.config.maxHeight
          : `${this.content.scrollHeight}px`
    }
  }
}

export default AccordionItem
