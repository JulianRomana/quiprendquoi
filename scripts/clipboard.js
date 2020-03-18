const copyToClipboard = ($clipboardEl, $button) => {
  navigator.clipboard
    .writeText($clipboardEl.getAttribute('data-clipboard'))
    .then(() => {
      $button.innerHTML = 'Copié !'
      setTimeout(() => ($button.innerHTML = 'Copier'), 2000)
    })
  .catch((err) => console.warn(err))
}

const setClipboards = ($clipboardsEls) => {

  if (!navigator.clipboard) return

  $clipboardsEls.forEach($clipboardEl => {
    const $button = document.createElement('button')
    $button.classList.add('copyButton')
    
    $button.innerHTML = 'Copier'
    $clipboardEl.parentNode.appendChild($button)
    $button.addEventListener(
      'click',
      copyToClipboard.bind(this, $clipboardEl, $button)
    )
  })
}


module.exports = setClipboards