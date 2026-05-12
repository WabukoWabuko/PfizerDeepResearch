window.addEventListener("scroll",()=>{

    const navbar =
        document.querySelector(".custom-navbar");

    navbar.classList.toggle(
        "scrolled",
        window.scrollY > 50
    );

});