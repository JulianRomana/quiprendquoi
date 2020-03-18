const shareParty = ($shareEl) => {
  navigator
  .share({
    title: $shareEl.getAttribute('data-share-title'),
    text: $shareEl.getAttribute('data-share-text'),
    url: $shareEl.getAttribute('data-share-url'),
  })
}

const setShare = ($shareEls) => {
  if (!navigator.share) return

  $shareEls.forEach($shareEl => {
    const $button = document.createElement('button')
    $button.classList.add('shareButton')
    
    $button.innerHTML = 'Partager'
    $shareEl.parentNode.appendChild($button)
    $button.addEventListener(
      'click',
      shareParty.bind(this, $shareEl, $button)
    )
  })
}

module.exports = setShare
