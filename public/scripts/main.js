const expandButtons = document.querySelectorAll(".category-button");
const choiceButtons = document.querySelectorAll(".category-subject");
const searchBar = document.querySelector('#search-bar');
const categoryBar = document.querySelector("#category-bar"); 

const categoriesShow = {"type":false,"price":false,"distance":false};
const categoriesChoice = {"type":"all","price":"all","distance":"all"};

function updateCategoryDisplay(){
    Object.keys(categoriesShow).forEach(category => {
        const div = document.querySelector("#"+category);

        // change expand image display option
        const buttonChildren = div.children[0].children;
        if(categoriesShow[category]){ buttonChildren[0].style.display = "none"; buttonChildren[1].style.display = "inline-block"; }
        else {buttonChildren[1].style.display = "none"; buttonChildren[0].style.display = "inline-block";}

        // change items display options and selected choice
        for(var i = 1; i < div.children.length; i++){
            const button = div.children[i];
            // item display
            if(categoriesShow[category]){ button.style.display = "inline-block"; }
            else {button.style.display = "none";}
            // coice bubble
            if(categoriesChoice[category] === button.name) {
                button.children[0].style.display = "none";
                button.children[1].style.display = "inline-block";
            } else { button.children[1].style.display = "none";
                button.children[0].style.display = "inline-block"; 
            }
        }
    });
}

const url = new URL(window.location);
Object.keys(categoriesChoice).forEach(category =>{
    console.log(url.searchParams.has(category));
    if(url.searchParams.has(category)) categoriesChoice[category] = url.searchParams.get(category);
});

expandButtons.forEach(b => {
    b.addEventListener("click", (e) =>{
        if(categoriesShow[b.name]) categoriesShow[b.name] = false;
        else categoriesShow[b.name] = true; 
        updateCategoryDisplay();
    });
});

choiceButtons.forEach(b => {
    b.addEventListener("click", (e) =>{
        categoriesChoice[b.parentElement.id] = b.name;
        var newURL = new URL(window.location);
        newURL.searchParams.set(b.parentElement.id, b.name);
        history.pushState(null, '', newURL);
        updateCategoryDisplay();
    });
});

searchBar.addEventListener('submit', async (e) =>{
    e.preventDefault();
})