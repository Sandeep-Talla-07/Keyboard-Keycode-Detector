const card = document.querySelector(".card");

window.addEventListener("keydown", (e) => {
  card.innerHTML = `
    <div class = "key">
    ${e.key == " " ? "Space" : e.key}
    <p>e.key</p>
    </div> 

    <div class = "key">
    ${e.keyCode}
    <p>e.key</p>
    </div> 

    <div class = "key">
    ${e.code}
    <p>e.key</p>
    </div> 

    `;
});
