/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple =>{
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        let img = document.createElement('img');
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', temple.location);
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    if (response.ok){
        templeList = await response.json();
        // console.log(templeList);
        displayTemples(templeList);
    }
}

/* reset Function */
const reset = function(){
    templesElement.replaceChildren();
}

/* sortBy Function */
const sortBy = function(temples){
    reset();
    const filter = document.getElementById('sortBy').value;
    
    switch (filter){
        case 'utah':{
            let sorted = temples.slice();
            for (let i = 0; i < sorted.length;) {
                if (sorted[i].location.includes("Utah") != true){
                    sorted.splice(i,1);
                    i--;
                }
                    i++;
                }
            displayTemples(sorted);
            break;
            }
        case 'notutah':{
            let sorted = temples.slice();
            for (let i = 0; i < sorted.length;) {
                if (sorted[i].location.includes("Utah") == true){
                    sorted.splice(i,1);
                    i--;
                }
                    i++;
                }
            displayTemples(sorted);
            break;
            }
        case 'older':{
            let sorted = temples.slice();
            olderDate = new Date(1950,0,1);
            for (let i = 0; i < sorted.length;) {
                let date = Date.parse(sorted[i].dedicated)
                if (date > olderDate){
                    sorted.splice(i,1);
                    i--;
                }
                    i++;
                }
            displayTemples(sorted);
            break;
        }
        case 'all':{
            displayTemples(temples);
            break;
        }
    }
}

getTemples();

/* Event Listener */
document.querySelector('#sortBy').addEventListener("change", () => {sortBy(templeList)});