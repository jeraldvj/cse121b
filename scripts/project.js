/* W05: Programming Tasks */

/* Declare and initialize global variables */
const proceduresElement = document.querySelector('#procedures');
let proceduresList = [];
let lengthList = [];

/* async displayTemples Function */
const displayProcedures = (procedures) => {
    procedures.forEach(procedure =>{
        let article = document.createElement('article');
        let div = document.createElement('div');
        let h3 = document.createElement('h3');
        h3.textContent = procedure.procedureName;
        let p1 = document.createElement('p');
        p1.innerHTML = `<span>Material: </span> ${procedure.material}`;
        let p2 = document.createElement('p');
        p2.innerHTML = `<span>Durability: </span> ${procedure.timeDurability}`;
        let p3 = document.createElement('p');
        p3.innerHTML = `<span>Description: </span> ${procedure.description}`;
        let img = document.createElement('img');
        img.setAttribute('src', procedure.materialImageUrl);
        img.setAttribute('alt', procedure.procedureName);
        div.appendChild(h3);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        article.appendChild(div);
        article.appendChild(img);
        proceduresElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const getProcedures = async () => {
    const response = await fetch('https://jeraldvj.github.io/cse121b/procedures-data.json');
    if (response.ok){
        proceduresList = await response.json();
        //console.log(proceduresList);
        displayProcedures(proceduresList);
        lengthArray(proceduresList);
        //console.log(lengthList);
    }
}

/*Create an array for the length*/
const lengthArray = function(procedures){
    for (let i = 0; i < procedures.length;) {
        i++;
        lengthList.push(i);
    }
    /* Filter the lenth List */
    console.log(lengthList);
    document.getElementById("array").innerHTML = lengthList;
    /* Output Odds Only Array */
    document.querySelector('#odds').innerHTML = lengthList.filter(number => number % 2 === 1);
    /* Output Evens Only Array */
    document.querySelector('#evens').innerHTML = lengthList.filter(number => number % 2 === 0);
}

/* reset Function */
const reset = function(){
    proceduresElement.replaceChildren();
}

/* find in the List */
const finding = function(list, toFind){
    let sorted = list.slice();
    for (let i = 0; i < sorted.length;) {
        if (sorted[i].material.includes(toFind) != true){
            sorted.splice(i,1);
            i--;
        }
            i++;
        }
    displayProcedures(sorted);
}

/* sortBy Function */
const sortBy = function(procedures){
    reset();
    const filter = document.getElementById('sortBy').value;
    
    switch (filter){
        case 'Botox':{
            let toFind = "Botox";
            finding(procedures, toFind);
            break;
            }
        case 'Hyaluronic Acid':{
            let toFind = "Hyaluronic Acid";
            finding(procedures, toFind);
            break;
            }
        case 'Plasma':{
            let toFind = "Plasma";
            finding(procedures, toFind);
            break;
            }
        case 'Tensioning wires':{
            let toFind = "Tensioning wires";
            finding(procedures, toFind);
            break;
            }
        case 'PDO Threads':{
            let toFind = "PDO Threads";
            finding(procedures, toFind);
            break;
            }
        case 'Enzymatic Lipolysis':{
            let toFind = "Enzymatic Lipolysis";
            finding(procedures, toFind);
            break;
            }
        case 'Peptones':{
            let toFind = "Peptones";
            finding(procedures, toFind);
            break;
            }
        case 'All':{
            displayProcedures(procedures);
            break;
        }
    }
}


getProcedures();

/* Event Listener */
document.querySelector('#sortBy').addEventListener("change", () => {sortBy(proceduresList)});



