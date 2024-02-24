class Item {
    constructor(name, desc, price, type) {
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.type = type;
    }
};

const menuItems = [
    new Item(
        "Appetizer One",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima laboriosam odit, rem beatae nulla?",
        "$$$",
        "app"
    ),
    new Item(
        "Appetizer Two",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima laboriosam odit, rem beatae nulla?",
        "$$$",
        "app"
    ),
    new Item(
        "Appetizer Three",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima laboriosam odit, rem beatae nulla?",
        "$$$",
        "app"
    ),
    new Item(
        "Entree One",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima laboriosam odit, rem beatae nulla?",
        "$$$",
        "entree"
    ),
    new Item(
        "Entree Two",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima laboriosam odit, rem beatae nulla?",
        "$$$",
        "entree"
    ),
    new Item(
        "Entree Three",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima laboriosam odit, rem beatae nulla?",
        "$$$",
        "entree"
    ),
    new Item(
        "Dessert One",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima laboriosam odit, rem beatae nulla?",
        "$$$",
        "dessert"
    ),
    new Item(
        "Dessert Two",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima laboriosam odit, rem beatae nulla?",
        "$$$",
        "dessert"
    )
];

export default function menu(content) {

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');
    const menuSection = document.createElement("h1");
    menuSection.textContent = "Menu";
    menuContainer.appendChild(menuSection);

    const appContainer = document.createElement('div');
    appContainer.classList.add('app');
    const appSection = document.createElement("h2");
    appSection.textContent = "Appetizers";
    appContainer.appendChild(appSection);

    const entreeContainer = document.createElement('div');
    const entreeSection = document.createElement("h2");
    entreeSection.textContent = "Entrees";
    entreeContainer.appendChild(entreeSection);

    const dessertContainer = document.createElement('div');
    const dessertSection = document.createElement("h2");
    dessertSection.textContent = "Desserts";
    dessertContainer.appendChild(dessertSection);

    menuContainer.appendChild(appContainer);
    menuContainer.appendChild(entreeContainer);
    menuContainer.appendChild(dessertContainer);

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add("menuItem");

        const itemName = document.createElement('h3');
        itemName.classList.add("name");
        itemName.textContent = `${item.name}`;

        const itemDescription = document.createElement('div');
        itemDescription.classList.add("desc");
        itemDescription.textContent = `${item.desc}`;

        const itemPrice = document.createElement('div');
        itemPrice.classList.add("price");
        itemPrice.textContent = `${item.price}`;


        menuItem.appendChild(itemName);
        menuItem.appendChild(itemDescription);
        menuItem.appendChild(itemPrice);

        if(item.type === "app"){
            appContainer.appendChild(menuItem)
        }
        else if(item.type=== "entree"){
            entreeContainer.appendChild(menuItem)
        }
        else if(item.type === "dessert"){
            dessertContainer.appendChild(menuItem)
        }
    });

    content.appendChild(menuContainer);
};