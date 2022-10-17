import { Component, OnInit } from '@angular/core';

interface Character {
    name: string;
    strength: number;
    agility: number;
    intelligence: number;
    life: number;
    editable?: boolean;
    mostrar?: boolean;
    valorBotonEdit: string;
    valorBotonShow: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    serverCharacters: Character[] = [];
    txt: String = "";


    constructor() {
        // Ejemplo de respuesta de un servidor en formato JSON
        const serverJson = `[
{"name": "Jugger", "strength": 18, "agility": 12, "intelligence": 6, "life": 30, "editable":true, "valorBotonEdit": "Edit", "mostrar":false, "valorBotonShow": "Show" },
{"name": "Pelegrin", "strength": 20, "agility": 8, "intelligence": 6, "life": 40, "editable":true, "valorBotonEdit": "Edit", "mostrar":false, "valorBotonShow": "Show" },
{"name": "Dorthak", "strength": 12, "agility": 18, "intelligence": 10, "life": 16, "editable":true, "valorBotonEdit": "Edit", "mostrar":false, "valorBotonShow": "Show" },
{"name": "Kharak", "strength": 8, "agility": 20, "intelligence": 12, "life": 14, "editable":true, "valorBotonEdit": "Edit", "mostrar":false, "valorBotonShow": "Show" },
{"name": "Perz", "strength": 10, "agility": 6, "intelligence": 20, "life": 10, "editable":true, "valorBotonEdit": "Edit", "mostrar":false, "valorBotonShow": "Show" }
]`;

        // Parseamos la información y la convertimos directamente en un array de "Character"
        this.serverCharacters = JSON.parse(serverJson);
    }
    ngOnInit(): void {

    }

    cambiarBotonEdit(Character: Character, txt: String): String {

        if (Character.editable == true) {
            Character.editable = false;
            Character.valorBotonEdit = "Save";

        } else if (Character.editable == false) {
            Character.editable = true;
            Character.valorBotonEdit = "Edit";

        }

        return txt = JSON.stringify(Character);

    }

    cambiarBotonShow(Character: Character, txt: String): String {

        if (Character.mostrar == true) {
            Character.mostrar = false;
            Character.valorBotonShow = "Show";

        } else if (Character.mostrar == false) {
            Character.mostrar = true;
            Character.valorBotonShow = "Hide";

        }

        return txt = JSON.stringify(Character);
    }



}
