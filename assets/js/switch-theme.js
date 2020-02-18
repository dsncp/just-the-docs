document.addEventListener("DOMContentLoaded", function(){

  const toggleDarkMode = document.querySelector('.js-toggle-dark-mode')
  
  const cssFile = document.querySelector('[rel="stylesheet"]')
  const originalCssRef =  '/just-the-docs/assets/css/just-the-docs.css'
  const darkModeCssRef = '/just-the-docs/assets/css/dark-mode.css'

  

  /*  toggle root variable colors -----  */
  jtd.addEvent(toggleDarkMode, 'change', function(e){

    e.target.checked ?
    document.body.classList.remove("dark")
    :
    document.body.classList.add("dark");
    //console.log(123,document.body.classList)
  })
})
