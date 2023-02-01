import { fromEvent, interval, mergeMap, switchMap } from "rxjs";

//mergeMap mantiene todas las subcripciones que estan corriendo
//switchMap solo mantiene una subcripcion activa

const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);


click$
.pipe(
    //mergeMap( () => interval$)
    switchMap( () => interval$)
)
.subscribe(console.log)