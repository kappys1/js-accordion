export class AccordionItem {
  constructor(element) {
    console.log(element)
    this.element = document.getElementById(element)
    const headers = this.element.querySelectorAll('dt')
    headers.forEach(item => {
      console.log(item.nextElementSibling)
    })
    console.log(this.element, headers)
  }
}

export default AccordionItem
