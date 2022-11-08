function enterKeyPressed(event) {
    var prabhasha = document.getElementById('searchbar').value
    prabhasha = prabhasha.toString()
    if (event.keyCode == 13) {
      event.preventDefault();
       console.log("{proccess} -- enter key")
       search(prabhasha)
    }
  }
var adult_mode = false

function aduult() {
  const adults = document.getElementById('adult')
  if (adults.checked == true){
      adult_mode = true
  }
}

const search = (values) => {
    if (adult_mode == true) {
      if(values.match(/porn|xxx|sex|fuck|pussy/gi)){
        alert('Warning..!\nChildrens doesn\'t allowed to search 18+ things!')
    }
    }else{
    var url = "https://www.google.com/search?q=" + values
    if(values.match(/kumu|prabhasha|jet|xcode|prabasha/gi)){
        url = "http://xcodejet.epizy.com"
    }
    window.open(url, '_blank')
}
}

setInterval(() => {
  let date = new Date()
  let clock = document.getElementById('times')
  var s_space = ""
  var m_space = ""
  if(date.getSeconds() <= 9){s_space = " : 0"}else{s_space = " : "}
  if(date.getMinutes() <= 9){m_space = " : 0"}else{m_space = " : "}
  clock.innerHTML = ''+
  date.getHours()+m_space+
  date.getMinutes()+s_space+
  date.getSeconds()+""

}, 1000)

var i = 0
function timecolor() {
  let clock = document.getElementById('times')
  const colourlibrary = ['red','rgb(9, 255, 0)','rgb(112, 188, 255)','rgb(112, 255, 195)','rgb(176, 40, 255)','pink','rgb(169, 255, 88)','yellow','orange','rgb(255, 228, 228)']
// * changing 10 colors
  clock.style.color = colourlibrary[i]
  i = i+1
  if(i == 10){i = 0}
  
}

function con() {

  const own = document.getElementById('contact')
  if (own.checked == true){
    setTimeout(owner(), 2000)
  }
}

function owner() {

  document.getElementById('adultdiv').style.display = "none"
  document.getElementById('adults').style.display = "none"
  document.getElementById('contacts').style.display = "block"

}

function aud() {
  var aud = document.getElementById('clicks')
  aud.play()
}

function afocus() {

  document.getElementById('searchbar').placeholder = "Search or type a URL"

}
  document.getElementById('searchbar').placeholder = "http://xcodejet.epizy.com"

