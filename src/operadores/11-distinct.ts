import { distinct, from, of } from "rxjs";

const numeros$ = of(1,1,1,1,2,2,2,3,3,4,4,4,4,5,5,5,5);


numeros$.pipe(
    distinct()
).subscribe(console.log);

interface Personaje {
    nombre : string;
}

const personajes : Personaje[] = [
    {
        nombre : 'Super man'
    },
    {
        nombre : 'Batman'
    },
    {
        nombre : 'La Vaca y el Pollito'
    },
    {
        nombre : 'Super man'
    },
    {
        nombre : 'Batman'
    },
    {
        nombre : 'La Vaca y el Pollito'
    },

]

from( personajes)
.pipe(distinct(p => p.nombre))
.subscribe(console.log)