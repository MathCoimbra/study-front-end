import { NgModule } from '@angular/core';
import { CourseListComponent } from './course-list.component';
import { CourseInfoComponent } from './course-info.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StarModule } from '../shared/component/star/star.module';
import { AppPipeModule } from '../shared/pipe/app-pipe.module';

@NgModule({
    /* a cada novo componente criado é informado */
    declarations: [
        CourseListComponent,
        CourseInfoComponent
    ], 
    imports: [
        /* CommonModule - módulo que contém os recursos básicos do angular, como no caso desse projeto, os pipes lowecase e date utilizados em course-list.component.html*/
        CommonModule,
        FormsModule,
        StarModule,
        AppPipeModule,
        /* forChild - significa que irá rodar assim que inicializar a aplicação, é esperado desse método um array de objetos */
        RouterModule.forChild([
            {
                /* linkando o caminho "/courses" ao componente de curso */
                path: 'courses', component: CourseListComponent
            },
            {
                /* linkando o caminho da info do componente de curso, e passando junto um parâmetro (:id) */
                path: 'courses/info/:id', component: CourseInfoComponent
            }
        ])
    ]
})
export class CourseModule { 

}