import _ from 'lodash';

console.log("testing");

const content = document.getElementById("content");

const restaurant = document.createElement("div");
restaurant.innerText = "Restaurant name";
content.appendChild(restaurant);

const about = document.createElement("div");
const info = document.createElement("div");
info.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima laboriosam odit, rem beatae nulla? Earum sunt facilis minima iusto cum rerum ipsum eligendi ducimus sapiente illum sequi illo, ipsam recusandae dignissimos nostrum tenetur adipisci accusamus reprehenderit. Esse nulla fuga quidem labore suscipit quod ea, modi molestiae animi exercitationem praesentium?";
const tag = document.createElement("div");
tag.innerText = "stuff";
content.appendChild(about);
about.appendChild(info);
about.appendChild(tag);

const hours = document.createElement("div");
const h = document.createElement("div");
h.innerText = "Hours";
const hoursList = document.createElement("ul");
const monday = document.createElement("li");
monday.innerText = "Monday: 10AM - 8PM";
const tuesday = document.createElement("li");
tuesday.innerText = "Tuesday: 10AM - 8PM";
const wednesday = document.createElement("li");
wednesday.innerText = "Wednesday: 10AM - 8PM";
const thrusday = document.createElement("li");
thrusday.innerText = "Thursday: 10AM - 8PM";
const friday = document.createElement("li");
friday.innerText = "Friday: 10AM - 9PM";
const saturday = document.createElement("li");
saturday.innerText = "Saturday: 10AM - 9PM";
const sunday = document.createElement("li");
sunday.innerText = "Sunday: 8AM - 6PM";
content.appendChild(hours);
hours.appendChild(h);
hours.appendChild(hoursList)
hoursList.appendChild(monday);
hoursList.appendChild(tuesday);
hoursList.appendChild(wednesday);
hoursList.appendChild(thrusday);
hoursList.appendChild(friday);
hoursList.appendChild(saturday);
hoursList.appendChild(sunday);

const address = document.createElement("div");
const l = document.createElement("div");
l.innerText = "Location";
const a = document.createElement("div");
a.innerText = "123456 Address Place, 98765 Town, State";
content.appendChild(address);
address.appendChild(l);
address.appendChild(a);