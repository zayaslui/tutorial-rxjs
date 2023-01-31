import { distinct, distinctUntilChanged, distinctUntilKeyChanged, from, of } from "rxjs";

interface Personaje {
    nombre : string;
}

const personajes : Personaje[] = [
    {
        nombre : 'Super man'
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
    {
        nombre : 'Super man'
    },
    {
        nombre : 'Batman'
    },
    {
        nombre : 'Batman'
    },
    {
        nombre : 'La Vaca y el Pollito'
    },

]

from( personajes)
.pipe(distinctUntilKeyChanged('nombre'))
.subscribe(console.log)