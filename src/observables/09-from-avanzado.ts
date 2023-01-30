import { async, from, of } from "rxjs"

/*
    of = toma argumentos y genera una secuencia
    from = array, promise, iterable, observable
*/

const observer = {
    next : val => console.log("next : ",val),
    complete : () => console.log("complete!!!")  
}

const source$ = from([1,2,3,4,5]);
const source2$ = of(...[1,2,3,4,5]);
const source3$ = from('luis');
const source4$ = from(fetch('https://api.github.com/users/klerith'));



//source4$.subscribe(observer)

source4$.subscribe( async(resp) => {
    console.log(resp);
    const dataResp = await resp.json();
    console.log(dataResp);
});


const miGenerador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}


const miIterable = miGenerador();

/*
for (const id of miIterable) {
    console.log(id);
}
*/


from(miIterable).subscribe(observer);
