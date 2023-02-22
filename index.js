// I wish you good luck and happy coding 
import { monsters } from "./monsters.js";
// console.log(monsters);

for(let mon of monsters){
    showMonsters(mon);
}

function showMonsters(mon) {
    const monsterdiv = document.createElement('div');
    monsterdiv.className = 'monster';

    const img = document.createElement('img');
    img.src = `https://robohash.org/${mon.id}?set=set2`;
    img.alt = mon.name;

    const name = document.createElement('p');
    name.className = "name";
    name.innerText = mon.name;

    const email = document.createElement('p');
    email.className = "email";
    email.innerText = mon.email;

    monsterdiv.append(img,name,email);

    document.querySelector('.monsters').append(monsterdiv);

    // console.log(monsterdiv);
}


notFound()
 function notFound(){
    const notFound = document.createElement('div');
    notFound.className = "p-5 not-found";
    notFound.style.display = 'none';

    const span = document.createElement('span');
    span.innerText = "404";

    const h1 = document.createElement('h1');
    h1.innerText = "🧟‍♂️ No Monster Found 🧟‍♂️"

    notFound.append(span,h1);
    document.querySelector('.monsters').append(notFound);
    // console.log(notFound)

}

document.querySelector('#search-monster').addEventListener('keyup' , function(e){
    const keyword = e.target.value.toLowerCase();
    // console.log(e);
    // console.log(keyword)
    const monsters = document.querySelectorAll(".monster");
    let isfound = true;
    for(let monster of monsters){
        // console.log(monster.children);
        const name = monster.children[1].innerText.toLowerCase();

        const email = monster.children[2].innerText.toLowerCase();

        // console.log(name,email)
        if(name.includes(keyword) || email.includes(keyword)){
            monster.style.display = 'block';
            isfound = false;
        } else {
            monster.style.display = 'none';
            if(isfound){
                document.querySelector('.not-found').style.display = "block";
            } else {
                document.querySelector('.not-found').style.display = "none";
            }
        }
    }
    
})

document.querySelector('#search-monster-form').addEventListener('submit' , e=> {
    e.preventDefault();
})