window.addEventListener("load",()=>{

    const loader =
        document.querySelector(".loader-wrapper");

    loader.style.opacity = "0";

    setTimeout(()=>{

        loader.style.display = "none";

    },700);

});