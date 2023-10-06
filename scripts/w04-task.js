/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Jerald Vásquez Jiménez",
    photo: "images/profile-pic.jpg",
    favoriteFoods: [
        'Rice',
        'Tikka Masala',
        'Prioshki',
        'Shrimp',
        'Banana Cream Pie'
    ],
    hobbies: [
        'Play Volleyball',
        'Listen Music',
        'Watch Movies'
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Montero, SCZ, Bolivia',
        length: '22 year'
    },
    {
        place: 'Iquitos, Loreto, Perú',
        length: '2 year'
    },
    {
        place: 'Santa Cruz de la Sierra, SCZ, Bolivia',
        length: '3 year'
    }
);

/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('img').setAttribute('src', myProfile.photo);
document.querySelector('img').setAttribute('alt','Profile image of '+ myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food =>{
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbie =>{
    let li = document.createElement('li');
    li.textContent = hobbie;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place =>{
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    document.querySelector('#places-lived').appendChild(dt);

    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dd);
});

