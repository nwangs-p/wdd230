
let baseUrl = "https://nwangs-p.github.io/wdd230/";

let linkUrl = "chamber/data/members.json";

const parent6Card = document.querySelector(".parent6-card");


const showGoldMembers = (goldMembers) => {
    goldMembers.forEach((goldMembers) => {

        const section = document.createElement("section");

        const img = document.createElement("img");
        img.setAttribute('src', goldMembers.image);
        img.setAttribute('alt', `img of ${goldMembers.name}`); 
    
        const h4 = document.createElement("h4");
        h4.innerHTML = goldMembers.name;

        const para1 = document.createElement("p");
        para1.textContent = goldMembers.address;

        const para2 = document.createElement("p");
        para2.textContent = goldMembers.country;

        const para3 = document.createElement("p");
        para3.textContent = goldMembers.phone;

        const para4 = document.createElement("p");
        para4.textContent = goldMembers.url;


        div.append(img, h4, para1, para2, para3, para4);
        parent6Card.appendChild(div);
    });
}







const getGoldMembers = async() => {
    try{
        const response = await fetch(baseUrl + linkUrl)
        if(response.ok){
            const data = await response.json();
            const goldMembers = data.members.filter(member => member.level === "Gold");
            //console.log(goldMembers);
            showGoldMembers(goldMembers);
        }
        else{
            throw Error(await response.text());
        }
    }
    catch(error){
        console.log(error);
    }
}

getGoldMembers();