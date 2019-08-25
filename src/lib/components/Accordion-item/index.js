import './index.scss'

export class AccordionItem {
  constructor(header, content, config = {}) {
    this.opened = false
    this.header = header
    this.config = config
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
    this.content.classList.remove('JsAccordion-body--opened')
    if (this.content) {
      this.content.style.maxHeight = '0px'
    }
  }

  open() {
    this.opened = true
    this.header.classList.add('JsAccordion-header--opened')
    this.content.classList.add('JsAccordion-body--opened')
    if (this.content) {
      this.content.style.maxHeight =
        this.config.maxHeight !== '9e99px'
          ? this.config.maxHeight
          : `${this.content.scrollHeight}px`
      // this.content.style.height = `${this.content.scrollHeight}px`
    }
  }
}

export default AccordionItem
