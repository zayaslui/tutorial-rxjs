import { from, fromEvent, range } from "rxjs";
import {  filter, map, mapTo, pluck } from "rxjs/operators";


range(1,10)
.pipe(filter( (value,i) => {
    //console.log('index : ',i);
    return value%2==1;
}))
//.subscribe(console.log)

interface Personaje {
    tipo    : string;
    nombre  : string;
} 


const personajes = [
    {
        tipo:'heroe',
        nombre :'Superman'
    },
    {
        tipo:'heroe',
        nombre :'Batman'
    },
    {
        tipo:'villano',
        nombre :'Joker'
    }
]

from(personajes)
.pipe(
    filter<Personaje>( (val,i) => {
        return val.tipo === 'heroe'
    })
)
//.subscribe(console.log);


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map<KeyboardEvent, string>( event => event.code),
    filter<string>( key => key ==='Enter')
)
keyup$.subscribe(console.log)