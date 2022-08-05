import { NgModule } from '@angular/core';
import { StarComponent } from './star.component';

@NgModule({
    declarations: [
        StarComponent
    ],
    /* Exportando o componente StarComponent para que seja utilizado em outro módulo */
    exports: [
        StarComponent
    ]
})
export class StarModule {

}