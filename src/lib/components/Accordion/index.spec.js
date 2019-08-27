import Accordion from './index'
import {
  accordionStructure,
  accordionBadStructure,
  accordionStructureWithOutContent,
  accordionStructureBadContent
} from '../../mock'

import {checkSectionIfIsOpened, checkSectionIfIsClosed} from '../../mock/utils'

describe('Accordion test', () => {
  test('Create New Element - correct structure', () => {
    document.body.innerHTML = accordionStructure
    const accordion = new Accordion('accordion')
    expect(accordion).toBeDefined()
  })

  test('Create New Element - bad structure', () => {
    document.body.innerHTML = accordionBadStructure
    expect(() => {
      new Accordion('accordion')
    }).toThrow()
  })

  test('Create New Element - good and 1 header section structure', () => {
    document.body.innerHTML = accordionStructureWithOutContent
    const accordion = new Accordion('accordion')
    expect(accordion).toBeDefined()
  })

  test('Create New Element - good structure with bad section', () => {
    document.body.innerHTML = accordionStructureBadContent
    const accordion = new Accordion('accordion')
    expect(accordion).toBeDefined()
  })

  test('Element check toggle by Javascript', () => {
    document.body.innerHTML = accordionStructure
    const accordion = new Accordion('accordion')
    const section = accordion.accordionItems[0]

    // open
    accordion.toggleAccordion(section)
    checkSectionIfIsOpened(section)

    // close
    accordion.toggleAccordion(section)
    checkSectionIfIsClosed(section)
  })

  test('Element check toggle simulate click', () => {
    document.body.innerHTML = accordionStructure
    const accordion = new Accordion('accordion')
    const section = accordion.accordionItems[0]

    // open
    section.header.click()
    checkSectionIfIsOpened(section)

    // close
    section.header.click()
    checkSectionIfIsClosed(section)
  })

  test('Element check toggle simulate click in header with content', () => {
    document.body.innerHTML = `
    <dl id="accordion">
      <dt>Section 1</dt>
    </dl>`
    const accordion = new Accordion('accordion')
    const section = accordion.accordionItems[0]

    // open
    accordion.toggleAccordion(section)
    expect(
      section.header.classList.contains('JsAccordion-header--opened')
    ).toBeTruthy()

    // close
    accordion.toggleAccordion(section)
    expect(
      section.header.classList.contains('JsAccordion-header--opened')
    ).toBeFalsy()
  })

  test('Element with autoclose by Javascript', () => {
    document.body.innerHTML = accordionStructure
    const accordion = new Accordion('accordion')
    const section1 = accordion.accordionItems[0]
    const section2 = accordion.accordionItems[1]

    // open section 1
    accordion.toggleAccordion(section1)
    checkSectionIfIsOpened(section1)
    checkSectionIfIsClosed(section2)

    // open section 2
    accordion.toggleAccordion(section2)
    checkSectionIfIsOpened(section2)
    checkSectionIfIsClosed(section1)
  })

  test('Element without autoclose by Javascript', () => {
    document.body.innerHTML = accordionStructure
    const config = {
      withAutoClose: false
    }
    const accordion = new Accordion('accordion', config)
    const section1 = accordion.accordionItems[0]
    const section2 = accordion.accordionItems[1]

    accordion.toggleAccordion(section1)
    accordion.toggleAccordion(section2)
    checkSectionIfIsOpened(section1)
    checkSectionIfIsOpened(section2)
  })

  test('Element with Transition', () => {
    document.body.innerHTML = accordionStructure
    const config = {
      withTransition: true
    }
    const accordion = new Accordion('accordion', config)
    // check is in transition
    expect(
      accordion.element.classList.contains('JsAccordion--withTransition')
    ).toBeTruthy()
  })

  test('Element without Transition', () => {
    document.body.innerHTML = accordionStructure
    const config = {
      withTransition: false
    }
    const accordion = new Accordion('accordion', config)
    // check is in transition
    expect(
      accordion.element.classList.contains('JsAccordion--withTransition')
    ).toBeFalsy()
  })

  test('Element with maxHeight', () => {
    document.body.innerHTML = accordionStructure
    const height = '150px'
    const config = {
      maxHeight: height
    }
    const accordion = new Accordion('accordion', config)
    const section1 = accordion.accordionItems[0]
    accordion.toggleAccordion(section1)
    expect(section1.content.style.maxHeight).toBe(height)
  })

  test('Element --> update', () => {
    document.body.innerHTML = accordionStructure
    const accordion = new Accordion('accordion')
    const numElem = accordion.accordionItems.length
    accordion.element.innerHTML += `
      <dt>Section Update</dt>
      <dd>update</dt>
    `
    accordion.update()
    expect(numElem).toBeLessThan(accordion.accordionItems.length)

    // check also all work
    // old item
    const section1 = accordion.accordionItems[0]
    accordion.toggleAccordion(section1)
    checkSectionIfIsOpened(section1)
    // new item
    const section2 = accordion.accordionItems[2]
    accordion.toggleAccordion(section2)
    checkSectionIfIsOpened(section2)
  })
})
