import { Component } from "@angular/core";

@Component({
    selector: 'app-property-card',
    //template: `<h1>I am a card</h1>`,
    templateUrl: 'property-card.components.html',
    //styles: [`h1{font-weight : normal;}`]
    styleUrls: ['property-card.components.css']
}

)
export class PropertyCardComponent{
    property: any ={
        "id": 1,
        "name": "Abir's house",
        "type": "House",
        "price": 12000,
    }
}