export default function contact(content) {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    };

    const heading = document.createElement("h1");
    heading.innerText = "Contact Us";
    content.appendChild(heading);

    const sec1 = document.createElement("div");
    const contact1 = document.createElement("h2");
    contact1.innerText = "Owner Name";
    const info1 = document.createElement("div")
    const title = document.createElement("div");
    title.innerText = "Owner";
    const num = document.createElement("div");
    num.innerText = "1-234-5678";
    const email = document.createElement("div");
    email.innerText = "realEmail@website.com";
    sec1.appendChild(contact1);
    info1.appendChild(title);
    info1.appendChild(num);
    info1.appendChild(email);
    sec1.appendChild(info1);


    const sec2 = document.createElement("div");
    const contact2 = document.createElement("h2");
    contact2.innerText = "Chef Name";
    const info2 = document.createElement("div")
    const t = document.createElement("div");
    t.innerText = "Chef";
    const n = document.createElement("div");
    n.innerText = "5-555-5555";
    const e = document.createElement("div");
    e.innerText = "anotherRealEmail@website.com";
    sec2.appendChild(contact2);
    info2.appendChild(t);
    info2.appendChild(n);
    info2.appendChild(e);
    sec2.appendChild(info2);


    content.appendChild(sec1);
    content.appendChild(sec2);
};