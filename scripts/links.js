let baseURL = "https://nwangs-p.github.io/wdd230/";

let linksURL = "data/links.json"

//Declearing varables
// Get the ul element
const ul = document.getElementById('Links');


const displayLinks = (weeks)=> {
    weeks.forEach((weeks) => {
        
        // Create a new li element
        const li = document.createElement('li');

        // Set the innerHTML of the li element
        li.innerHTML = `${weeks.week}: ${weeks.links.map(link => `<a href="${link.url}">${link.title}</a>`).join(' | ')}`;

        // Append the li element to the ul
        ul.appendChild(li);
        
    });

 
}




const getLinks = async()=> {
    try{
        const response = await fetch(baseURL + linksURL);
        if(response.ok)
        {
            const data = await response.json();
            //console.log(data);
            displayLinks(data.weeks);
        }
        else
        {
            throw Error(await response.text());
        }

    }
    catch(error)
    {
        console.log(error);
    }
}

getLinks()