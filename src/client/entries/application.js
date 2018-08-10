import "../style/application.scss";
import image from "../images/react.png";


console.log("Bonjour");

var imageElem = document.createElement('img');
imageElem.setAttribute('src', image);

document.body.appendChild(imageElem);