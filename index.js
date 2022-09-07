function dropdownMenu() {
  document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches('[data-dropdown-btn')

    let currentContent
    if (isDropdownButton) {
      currentContent = e.target.nextElementSibling
      currentContent.classList.toggle('active')
    }

    document.querySelectorAll('[data-dropdown]').forEach(dropdown => {
      const dropdownContent = dropdown.querySelector('.content')
      if (dropdownContent === currentContent) return
      dropdownContent.classList.remove('active')
    })
  })
}

module.exports.dropdownMenu = dropdownMenu