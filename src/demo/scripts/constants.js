export const examples = [
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
export const themes = [
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
export const dynamicRequests = [
  'http://www.mocky.io/v2/5d63ba863200006600ba1d05',
  'http://www.mocky.io/v2/5d63baa83200007500ba1d07',
  'http://www.mocky.io/v2/5d63bac53200007300ba1d09'
]
export const dynamicContentRequests = [
  'http://www.mocky.io/v2/5d645be73200005d00ba2039',
  'http://www.mocky.io/v2/5d645c173200005d00ba203b',
  'http://www.mocky.io/v2/5d645c413200005d00ba203c',
  'http://www.mocky.io/v2/5d645cb332000050a6ba203e',
  'http://www.mocky.io/v2/5d645cd83200009ca8ba203f',
  'http://www.mocky.io/v2/5d645cf532000047a8ba2041'
]
