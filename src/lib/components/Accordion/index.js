import '../../index'

export class Accordion {
  constructor(element) {
    this.element = document.getElementById(element)
    const headers = this.element.querySelectorAll('dt')
    headers.forEach(item => {
      console.log(item.nextElementSibling)
    })
    console.log(this.element, headers)
  }
}

export default Accordion
