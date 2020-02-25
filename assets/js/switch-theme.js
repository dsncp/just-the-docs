document.addEventListener("DOMContentLoaded", function () {

  const toggleDarkMode = document.querySelector('.js-toggle-dark-mode')

  /*  toggle root variable colors -----  */
  jtd.addEvent(toggleDarkMode, 'change', function (e) {

    //const savedTheme = sessionStorage.getItem("")
      e.target.checked ?
        document.body.classList.remove("dark") :
        document.body.classList.add("dark");
    
    //sessionStorage.setItem("",)
    //console.log(123,document.body.classList)
  })
})