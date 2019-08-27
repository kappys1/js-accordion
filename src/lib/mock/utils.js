export function checkSectionIfIsOpened(section) {
  expect(
    section.header.classList.contains('JsAccordion-header--opened')
  ).toBeTruthy()
  expect(
    section.content.classList.contains('JsAccordion-body--opened')
  ).toBeTruthy()
}

export function checkSectionIfIsClosed(section) {
  expect(
    section.header.classList.contains('JsAccordion-header--opened')
  ).toBeFalsy()
  expect(
    section.content.classList.contains('JsAccordion-body--opened')
  ).toBeFalsy()
}
