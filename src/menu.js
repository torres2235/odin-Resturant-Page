export default function menu(content) {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    };

    const heading = document.createElement("h1");
    heading.innerText = "Menu";
    content.appendChild(heading);

    const sec1 = document.createElement("div");
    const apps = document.createElement("h2");
    apps.innerText = "Appetizers";
    sec1.appendChild(apps);
    
    const app1 = document.createElement("div")
    const app1Name = document.createElement("h3");
    app1Name.innerText = "Dish Name";
    const app1Disc = document.createElement("p");
    app1Disc.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima laboriosam odit, rem beatae nulla?";
    const app1Price = document.createElement("div");
    app1Price.innerText = "$$$";
    sec1.appendChild(app1);
    app1.appendChild(app1Name);
    app1.appendChild(app1Disc);
    app1.appendChild(app1Price);

    const app2 = document.createElement("div")
    const app2Name = document.createElement("h3");
    app2Name.innerText = "Dish Name";
    const app2Disc = document.createElement("p");
    app2Disc.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima laboriosam odit, rem beatae nulla?";
    const app2Price = document.createElement("div");
    app2Price.innerText = "$$$";
    sec1.appendChild(app2);
    app2.appendChild(app2Name);
    app2.appendChild(app2Disc);
    app2.appendChild(app2Price);


    const sec2 = document.createElement("div");
    const ent = document.createElement("h2");
    ent.innerText = "Entrees";
    sec2.appendChild(ent);
    
    const ent1 = document.createElement("div")
    const ent1Name = document.createElement("h3");
    ent1Name.innerText = "Dish Name";
    const ent1Disc = document.createElement("p");
    ent1Disc.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima laboriosam odit, rem beatae nulla?";
    const ent1Price = document.createElement("div");
    ent1Price.innerText = "$$$";
    sec2.appendChild(ent1);
    ent1.appendChild(ent1Name);
    ent1.appendChild(ent1Disc);
    ent1.appendChild(ent1Price);

    const ent2 = document.createElement("div")
    const ent2Name = document.createElement("h3");
    app2Name.innerText = "Dish Name";
    const ent2Disc = document.createElement("p");
    ent2Disc.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima laboriosam odit, rem beatae nulla?";
    const ent2Price = document.createElement("div");
    ent2Price.innerText = "$$$";
    sec2.appendChild(ent2);
    ent2.appendChild(ent2Name);
    ent2.appendChild(ent2Disc);
    ent2.appendChild(ent2Price);


    const sec3 = document.createElement("div");
    const drinks = document.createElement("h2");
    drinks.innerText = "Drinks";
    sec3.appendChild(drinks);
    
    const drinkList = document.createElement("ul");
    const drink1 = document.createElement("li");
    drink1.innerText = "Coke";
    const drink2 = document.createElement("li");
    drink2.innerText = "Sprite";
    const drink3 = document.createElement("li");
    drink3.innerText = "Dr.Pepper";
    const drink4 = document.createElement("li");
    drink4.innerText = "Root Beer";
    const drink5 = document.createElement("li");
    drink5.innerText = "Lemonade";
    const drink6 = document.createElement("li");
    drink6.innerText = "Sweet Tea";
    const drink7 = document.createElement("li");
    drink7.innerText = "Fanta";
    const drinkPrice = document.createElement("div");
    drinkPrice.innerText = "$$$";
    sec3.appendChild(drinkList);
    drinkList.appendChild(drink1)
    drinkList.appendChild(drink2);
    drinkList.appendChild(drink3);
    drinkList.appendChild(drink4);
    drinkList.appendChild(drink5);
    drinkList.appendChild(drink6);
    drinkList.appendChild(drink7);
    sec3.appendChild(drinkPrice)

    content.appendChild(sec1);
    content.appendChild(sec2);
    content.appendChild(sec3);
};