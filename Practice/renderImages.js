const imgs = [
    "images/image1.png",
    "images/image2.png",
    "images/image3.png"
]

const containerEl = document.getElementById("container")

function renderImages(imgs) {
    let imgsDOM = ""
    for(i=0;i<imgs.length;i++) {
         imgsDOM += `<img alt="Employee in the company" src=${imgs[i]} class="team-img"> `;
    }
    containerEl.innerHTML = imgsDOM
}

renderImages(imgs)
