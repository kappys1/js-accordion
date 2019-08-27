/* eslint-disable no-console */
/* eslint-disable func-names */
import Accordion from '../../lib/index'
import {loadExample, loadThemes, getRequest} from './utils'
import {
  examples,
  themes,
  dynamicRequests,
  dynamicContentRequests
} from './constants'
import '../styles/index.scss'

let dynamicAccordion = null

window.changeTheme = function(theme, logo) {
  const active = document.querySelector('.Tabs .active')
  if (active !== null) {
    active.classList.remove('active')
  }
  document.querySelector(`#${theme}`).classList.add('active')
  document.querySelector(`#logo`).src = logo || ''
  const body = document.querySelector('body')
  const oldTheme = body.classList[0]
  body.classList.remove(oldTheme)
  body.classList.add(theme)
}

window.loadAjaxAccordion = function() {
  const url =
    dynamicRequests[Math.floor(Math.random() * dynamicRequests.length)]
  document.getElementById('examplesDynamic').innerHTML = '<div>Loading...</div>'
  getRequest(url)
    .then(res => {
      const id = 'dynamicAccordion'
      const config = {...res, id: 'dynamicAccordion'}
      const html = loadExample(config)
      document.getElementById('examplesDynamic').innerHTML = html
      setTimeout(() => {
        dynamicAccordion = new Accordion(id, config)
      })
    })
    .catch(err => console.log(err))
}

window.loadAjaxContent = function() {
  if (dynamicAccordion) {
    const url =
      dynamicContentRequests[
        Math.floor(Math.random() * dynamicContentRequests.length)
      ]
    getRequest(url).then(res => {
      const elm = (dynamicAccordion.element.innerHTML += `
        <dt>Section Dynamic</dt>
        <dd>${res.text}</dt>
      `)
      dynamicAccordion.update()
    })
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const html = examples.map(ex => loadExample(ex)).join('')
  const htmlThemes = loadThemes(themes)
  document.getElementById('examples').innerHTML = html
  document.getElementById('Tabs-theme').innerHTML = htmlThemes
  setTimeout(() => {
    window.changeTheme(themes[0].id, themes[0].logo)
    examples.map(ex => new Accordion(ex.id, ex.config))
  })
})
