import { map, range, tap } from "rxjs";


const numeros$ = range(1,5).pipe(
    tap<number>(x => {
        console.log('antes',x)
        return 100;
    }),
    //map(val => (val * 10).toString()),
    map(val => val * 10),
    //tap(x => {console.log('despues',x)}),
    tap({
        next        : valor => console.log('despues',valor),
        complete    : () => console.log('se termino todo'),
    }),
)

numeros$.subscribe(val => console.log('subs',val));