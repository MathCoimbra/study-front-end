import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    /* nome do pipe */
    name: 'replace'
})
/* PipeTransform - interface do pipe para realizar o pipe replace */
export class ReplacePipe implements PipeTransform {
    
    /* através desse método é esperado o valor a ser alterado, o caractere que deve ser substituído e o valor que será colocado no lugar desse caractere  */
    transform(value: string, char: string, valueToReplace: string) { 
        return value.replace(char, valueToReplace);
    }

}