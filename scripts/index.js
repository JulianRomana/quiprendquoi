const $clipboards = document.querySelectorAll('[data-clipboard]')
const $share = document.querySelectorAll('[data-share-url]')

require('./clipboard')($clipboards)
require('./share')($share)
