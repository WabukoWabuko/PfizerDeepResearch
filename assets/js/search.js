const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(){

    let filter = searchInput.value.toLowerCase();

    let cards = document.querySelectorAll(".feature-card");

    cards.forEach(card => {

        let text = card.innerText.toLowerCase();

        if(text.includes(filter)){

            card.style.display = "";

        }else{

            card.style.display = "none";

        }

    });

});