/* eslint-disable no-console */
/* eslint-disable func-names */
import {Accordion} from '../../lib/index'
import {loadExample, loadThemes} from './utils'
import '../styles/index.scss'

const examples = [
  {
    title: 'Accordion with transition and autoclose and max height',
    id: 'accordion1',
    config: {
      maxHeight: '150px'
    }
  },
  {
    title: 'Accordion without transition and no autoclose',
    id: 'accordion2',
    config: {
      withAutoClose: false,
      withTransition: false
    }
  },
  {
    title: 'Accordion with auto height and transition',
    id: 'accordion3'
  },
  {
    title: 'Accordion with event (in console)',
    id: 'accordion4',
    config: {
      onToggle: accordion => console.log(accordion)
    }
  },
  {
    title: 'Accordion rounded',
    id: 'accordion5'
  }
]
const themes = [
  {
    id: 'default-theme',
    name: 'default',
    logo: 'https://www.transparenttextures.com/patterns/debut-light.png'
  },
  {
    id: 'milanuncios-theme',
    name: 'milanuncios',
    logo:
      'https://static.adevinta.com/wp-content/uploads/2018/07/23131811/Screen-Shot-2018-07-23-at-15.17.59-300x68.png'
  },
  {
    id: 'fotocasa-theme',
    name: 'fotocasa',
    logo:
      'https://static.adevinta.com/wp-content/uploads/2018/07/23131633/Screen-Shot-2018-07-23-at-15.16.22-300x103.png'
  },
  {
    id: 'motos-theme',
    name: 'motos',
    logo:
      'https://static.adevinta.com/wp-content/uploads/2018/07/23131107/download-300x48.png'
  },
  {
    id: 'vibbo-theme',
    name: 'vibbo',
    logo:
      'https://static.adevinta.com/wp-content/uploads/2018/07/23131856/Screen-Shot-2018-07-23-at-15.18.39-300x126.png'
  },
  {
    id: 'infojobs-theme',
    name: 'infojobs',
    logo:
      'https://static.adevinta.com/wp-content/uploads/2018/07/23132101/Screen-Shot-2018-07-23-at-15.19.56-300x94.png'
  }
]

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
