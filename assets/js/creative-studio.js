document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".navbar .nav-link")

  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault()
        var hash = this.hash
        var targetElement = document.querySelector(hash)

        if (targetElement) {
          var topOffset = targetElement.offsetTop
          window.scrollTo({
            top: topOffset,
            behavior: "smooth",
          })
          window.history.pushState({}, "", hash)
        }
      }
    })
  })
})
