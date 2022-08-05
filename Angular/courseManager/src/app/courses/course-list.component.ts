import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit { 

    filteredCourses: Course[] = [];

    _courses: Course[] = [];
    
    /* underline na frente da variável indica que ela será acessada somente nesse componente */
    _filterBy: string;

    constructor(private courseService: CourseService) { }

    ngOnInit(): void { 
        this.retrieveAll();
    }

    retrieveAll(): void { 
        /* subscrição do Observable <Course[]>  */
        this.courseService.retrieveAll().subscribe({
            /* callback functions */
            /* next - quando a requisição ocorrer irá retornar os cursos e a operação de filtrar os cursos caso seja realizada */
            next: courses => {
                this._courses = courses;
                this.filteredCourses = this._courses;
            },
            /* error - quando a requisição não ocorrer, irá retornar um erro */
            error: err => console.log('Error', err) 
        })
    }

    deleteById(courseId: number): void { 
        /* subscrição do Observable<any> */
        this.courseService.deleteById(courseId).subscribe({
            next: () => { 
                console.log('Deleted with success');
                this.retrieveAll();
            },
            error: err => console.log('Error', err)
        })
    }

    set filter(value: string) { 
        this._filterBy = value;

        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter() { 
        return this._filterBy;
    }

}