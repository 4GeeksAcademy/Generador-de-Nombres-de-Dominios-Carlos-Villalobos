import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ['the', 'our', 'they'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let mostrarDominio = document.getElementById('dom');
  let dominios = " ";

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        dominios += pronoun[i] + adj[j] + noun[k] + ".com <br>";
        console.log(pronoun[i] + adj[j] + noun[k] + ".com");
        
        
      }
      
    }
    
  }
  mostrarDominio.innerHTML = dominios;
};
