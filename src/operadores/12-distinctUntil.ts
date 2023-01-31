import { distinct, distinctUntilChanged, from, of } from "rxjs";

const numeros$ = of<any>('1',1,1,2,2,2,3,3,4,4,4,4,5,5,5,5);


numeros$.pipe(
    distinctUntilChanged()
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
.pipe(distinctUntilChanged((ant, act) => ant.nombre===act.nombre))
.subscribe(console.log)