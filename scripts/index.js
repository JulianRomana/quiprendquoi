const setClipboards = require('./clipboard')
const setShares = require('./share')

const $clipboards = document.querySelectorAll('[data-clipboard]')
const $share = document.querySelectorAll('[data-share-url]')

setClipboards($clipboards)
setShares($share)