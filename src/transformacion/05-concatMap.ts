import { concatMap, fromEvent, interval, mergeMap, switchMap, take } from "rxjs";

//mergeMap mantiene todas las subcripciones que estan corriendo
//switchMap solo mantiene una subcripcion activa (el ultimo)
//concatMap concatena las subcripociones de forma secuencial hasta que se complete el observable, luego ejecuta el siguiente
const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');


click$
.pipe(
    //mergeMap( () => interval$)
    //switchMap( () => interval$)
    concatMap( () => interval$)
)
.subscribe(console.log)