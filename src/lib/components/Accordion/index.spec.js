import Accordion from './index'

describe('Accordion test', () => {
  test('Create New Element', () => {
    document.body.innerHTML = '<div id="accordion"> </div>'
    const accordion = new Accordion('accordion')
    expect(accordion).toBeDefined()
  })
})
