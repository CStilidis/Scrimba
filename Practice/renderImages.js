const imgs = [
    "images/image1.png",
    "images/image2.png",
    "images/image3.png"
]

const containerEl = document.getElementById("container")

function renderImages(imgs) {
    let htmlContent = 
    for(i=0;i<imgs.length;i++) {
        containerEl.innerHTML += `
        <img src=${imgs[i]} class="team-img"> 
        `;
    }
}

renderImages(imgs)
