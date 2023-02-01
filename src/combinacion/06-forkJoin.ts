import { delay, forkJoin, interval, of, take } from "rxjs";

const numeros$   = of(1,2,3,4);
const intervalo$ = interval(1000).pipe(take(3));
const letras$    = of('a','b','c').pipe(delay(3500));

forkJoin({
    num: numeros$,
    int: intervalo$,
    let: letras$,
}).subscribe(resp => {
    console.log(resp)
})