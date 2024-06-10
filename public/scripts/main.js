const buttons = document.querySelectorAll(".category-button");
const categoryBar = document.querySelector("#category-bar"); 

const categories = {"type":false,"price":false,"distance":false};

function updateCategoryDisplay(){
    Object.keys(categories).forEach(category => {
        const div = document.querySelector("#"+category);

        // change expand image display option
        const buttonChildren = div.children[0].children;
        console.log(buttonChildren);
        if(categories[category]){ buttonChildren[0].style.display = "none"; buttonChildren[1].style.display = "inline-block"; }
        else {buttonChildren[1].style.display = "none"; buttonChildren[0].style.display = "inline-block";}

        // change items display options
        for(var i = 1; i < div.children.length; i++){
            if(categories[category]){ div.children[i].style.display = "inline-block"; }
            else {div.children[i].style.display = "none";}
        }
    });
}

buttons.forEach(b => {
    b.addEventListener("click", (e) =>{
        if(categories[b.name]) categories[b.name] = false;
        else categories[b.name] = true; 
        updateCategoryDisplay();
    });
});