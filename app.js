document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submitMemeButton").addEventListener("click", function(e) {
        e.preventDefault();

        const finalMeme = document.createElement("div");

        const imageOutputElement = document.getElementById("imageurl");
        const memeImgElement = document.createElement("img");
        memeImgElement.src = imageOutputElement.value;

        const topTextOutputElement = document.createElement("div");
        const bottomTextOutputElement = document.createElement("div");
        topTextOutputElement.classList.add("topTextClass");
        bottomTextOutputElement.classList.add("bottomTextClass");
        topTextOutputElement.innerText = document.getElementById("topTextInput").value;
        bottomTextOutputElement.innerText = document.getElementById("bottomTextInput").value;

       finalMeme.classList.add("finalMemeClass");

        const removeButton = document.createElement("button");
        removeButton.innerText = "REMOVE";
        finalMeme.appendChild(removeButton);

        finalMeme.appendChild(memeImgElement);
        finalMeme.appendChild(topTextOutputElement);
        finalMeme.appendChild(bottomTextOutputElement);

        const memeDiv = document.getElementById("memeDiv");
        memeDiv.appendChild(finalMeme);
 
        document.getElementById("forms").reset();

        removeButton.addEventListener("click", function(e){
        e.target.parentNode.remove();
        console.log(removeButton);
        });
    });  
});