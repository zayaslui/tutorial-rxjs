import { from, map, reduce, scan, tap } from "rxjs";

const numbers = [1,2,3,4,5];


const totalAcumulador2 = (acc,cur) => {
    return acc + cur;
}

const totalAcumulador = (acc,cur) => acc + cur;


//reduce

from(numbers)
.pipe(
    reduce(totalAcumulador,0)
)
//.subscribe(console.log)


//scan

from(numbers)
.pipe(
    scan(totalAcumulador,0)
)
//.subscribe(console.log);


//reduce

interface Usuario {
    id?          :string;
    autenticado? :boolean;
    token?       :string;
    edad?        :number;
}

const user : Usuario[] = [
    {id :'luis', autenticado:false,token:null},
    {id :'luis', autenticado:true,token:'ABC'},
    {id :'luis', autenticado:true,token:'ABC123'},
]

const state$ = from(user).pipe(
    scan( (acc,cur) => {
        return {...acc, ...cur}
    },{edad : 33}),
)

const id$ = state$.pipe(
    tap(console.log),
    map( state => state.id ),
);

id$.subscribe(console.log)


//state$.subscribe()