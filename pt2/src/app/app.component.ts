import { Component } from '@angular/core';

interface Character {
name: string;
strength: number;
agility: number;
intelligence: number;
life: number;
editable?: boolean;
valorBoton:string;
}

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {

serverCharacters: Character[] = [];
txt: String = "";


constructor() {
// Ejemplo de respuesta de un servidor en formato JSON
const serverJson = `[
{"name": "Jugger", "strength": 18, "agility": 12, "intelligence": 6, "life": 30, "editable":true, "valorBoton": "Edit" },
{"name": "Pelegrin", "strength": 20, "agility": 8, "intelligence": 6, "life": 40, "editable":true, "valorBoton": "Edit" },
{"name": "Dorthak", "strength": 12, "agility": 18, "intelligence": 10, "life": 16, "editable":true, "valorBoton": "Edit" },
{"name": "Kharak", "strength": 8, "agility": 20, "intelligence": 12, "life": 14, "editable":true, "valorBoton": "Edit" },
{"name": "Perz", "strength": 10, "agility": 6, "intelligence": 20, "life": 10, "editable":true, "valorBoton": "Edit" }
]`;

// Parseamos la información y la convertimos directamente en un array de "Character"
this.serverCharacters = JSON.parse(serverJson);
}

cambiarBoton(Character:Character, txt:String):String {

if(Character.editable == true){
Character.editable = false;
Character.valorBoton = "Save";

} else if(Character.editable == false) {
Character.editable = true;
Character.valorBoton = "Edit";

}

return txt = JSON.stringify(Character);

}



}
