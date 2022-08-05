import { Component, OnChanges, Input } from '@angular/core';

@Component({
    /* selector - cria um tag HTML para o componente Angular interagir no HTML */
    selector: 'app-star',
    /* templateURL - usado para informar o arquivo da página HTML do componente*/
    templateUrl: './star.component.html',
    /* styleURLs - usado para informar o arquivo CSS da página do componente*/
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges { 

    @Input()
    rating: number = 0;

    starWidth: number;
    
    ngOnChanges(): void { 
        this.starWidth = this.rating * 74 / 5;
    }

}