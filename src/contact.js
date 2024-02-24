class Item {
    constructor(name, title, phoneNum, email) {
        this.name = name;
        this.title = title;
        this.phoneNum = phoneNum;
        this.email = email;
    }
};

const contactItems = [
    new Item(
        "Monica Geller",
        "Head Chef",
        "1-123-4567",
        "monicaGeller@email.com"
    ),
    new Item(
        "Gordan Ramsey",
        "Owner",
        "1-222-3333",
        "gordanRamsey@email.com"
    ),
    new Item(
        "Michael Scott",
        "Manager",
        "1-999-888",
        "michealScott@email.com"
    )
];

export default function contact(content) {
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contactContainer');
    const contactSection = document.createElement("h1");
    contactSection.textContent = "Contact Us";
    contactContainer.appendChild(contactSection);

    contactItems.forEach(item => {
        const contactItem = document.createElement('div');
        contactItem.classList.add("contactItem");

        const contactName = document.createElement("h2");
        contactName.classList.add("contactName");
        contactName.innerText = item.name;

        const contactTitle = document.createElement('div');
        contactTitle.classList.add("contactTitle");
        contactTitle.innerText = item.title;

        const contactNum = document.createElement('div');
        contactNum.classList.add("contactNum");
        contactNum.innerText = item.phoneNum;

        const contactEmail = document.createElement('div');
        contactEmail.classList.add("contactEmail");
        contactEmail.innerText = item.email;

        contactItem.appendChild(contactName);
        contactItem.appendChild(contactTitle);
        contactItem.appendChild(contactNum);
        contactItem.appendChild(contactEmail);

        contactContainer.appendChild(contactItem);
    });


    content.appendChild(contactContainer);
};