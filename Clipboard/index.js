let containerEl = document.getElementById("container")

containerEl.innerHTML = "<button>Buy!</button>"

containerEl.addEventListener("click", function(){
    containerEl.innerHTML += "</br>" + "<p style= color:red;>Thank you for buying!</p>"
})