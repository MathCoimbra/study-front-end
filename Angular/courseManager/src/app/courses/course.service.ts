import { Course } from './course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    /* providedIn - utilizado para que quando a classe de módulo seja carregada essa classe de serviço também seja */
    providedIn: 'root'
})
export class CourseService { 

    /* URL do serve.js para requisições HTTP  */
    private coursesUrl: string = 'http://localhost:3100/api/courses';

    /* injeção de dependência do HTTP para permitir os métodos desse módulo */
    constructor(private httpClient: HttpClient) { }

    /* Observable - padrão de retorno de um HTTPClient, retorno que irá aguardar um subscrição para que a requisição seja realizada */
    retrieveAll(): Observable<Course[]> {
        /* requisição GET da lista de cursos */
        return this.httpClient.get<Course[]>(this.coursesUrl);
    }

    retrieveById(id: number): Observable<Course> { 
        /* requisição GET para retornar algum curso através do ID*/
        return this.httpClient.get<Course>(`${this.coursesUrl}/${id}`);
    }

    save(course: Course): Observable<Course> { 
        /* se tiver um ID do curso*/
        if(course.id) { 
            /* requisição PUT para adicionar/editar esse curso*/
            return this.httpClient.put<Course>(`${this.coursesUrl}/${course.id}`, course);
            /* se não tiver um ID do curso */
        } else { 
            /* requisição POST para adicionar o curso, e quem irá realizar a adição do ID será o back-end (node) */
            return this.httpClient.post<Course>(`${this.coursesUrl}`, course);
        }
    }

    deleteById(id: number): Observable<any> {
        /* requisição DELETE para excluir um curso pelo ID, retorna qualquer coisa */
        return this.httpClient.delete<any>(`${this.coursesUrl}/${id}`);
    }

}

var COURSES: Course[] = [
    {
        id: 1,
        name: 'Angular: CLI',
        releaseDate: 'November 2, 2019',
        description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
        duration: 120,
        code: 'XLF-1212',
        rating: 3,
        price: 12.99,
        imageUrl: '/assets/images/cli.png',
    },
    {
        id: 2,
        name: 'Angular: Forms',
        releaseDate: 'November 4, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
        duration: 80,
        code: 'DWQ-3412',
        rating: 3.5,
        price: 24.99,
        imageUrl: '/assets/images/forms.png',
    },
    {
        id: 3,
        name: 'Angular: HTTP',
        releaseDate: 'November 8, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
        duration: 80,
        code: 'QPL-0913',
        rating: 4.0,
        price: 36.99,
        imageUrl: '/assets/images/http.png',
    },
    {
        id: 4,
        name: 'Angular: Router',
        releaseDate: 'November 16, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
        duration: 80,
        code: 'OHP-1095',
        rating: 4.5,
        price: 46.99,
        imageUrl: '/assets/images/router.png',
    },
    {
        id: 5,
        name: 'Angular: Animations',
        releaseDate: 'November 25, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
        duration: 80,
        code: 'PWY-9381',
        rating: 5,
        price: 56.99,
        imageUrl: '/assets/images/animations.png',
    }
];