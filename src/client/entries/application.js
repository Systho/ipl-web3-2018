import "../style/application.css";
import image from "../images/react.png";


fetch("/users/current")
    .then((response) => { return response.json() })
    .then((currentUser) => {
        var helloElem = document.createElement('span');
        helloElem.innerText = ` : Bonjour ${currentUser.firstName}`;
        document.body.querySelector("h1").appendChild(helloElem);
    })

var imageElem = document.createElement('img');
imageElem.setAttribute('src', image);

document.body.appendChild(imageElem);