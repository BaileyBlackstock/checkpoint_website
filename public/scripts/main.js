const buttons = document.querySelectorAll(".category-item");

buttons.forEach(b => {
    b.addEventListener("click", (e) =>{
        console.log(b.name);
    });
});