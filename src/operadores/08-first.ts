import { first, fromEvent, map, of, take, tap } from "rxjs";


const click$ = fromEvent<MouseEvent>(document,'click')


click$
.pipe(
    //take(1)
    tap<MouseEvent>( (val) => console.log("tap: ",val)),
    map( ({ clientX, clientY }) => ({clientX, clientY}) ),
    tap( (val) => console.log("tap: ",val)),
    first( event => event.clientY >= 150)
)
.subscribe({
    next: val => console.log('next: ',val),
    complete : () => console.log('complete')
})
