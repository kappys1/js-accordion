import Accordion from './index'

describe('Accordion test', () => {
  test('Create New Element', () => {
    document.body.innerHTML = `
      <dl id="accordion">
        <dt>Section 1</dt>
        <dd>
          <p>Section 1 Content...</p>
        </dd>
      </dl>
    `
    const accordion = new Accordion('accordion')
    expect(accordion).toBeDefined()
  })
})
