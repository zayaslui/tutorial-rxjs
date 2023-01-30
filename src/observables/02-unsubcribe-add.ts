import { Observable, Observer } from "rxjs"

const observer : Observer<any> = {
    next: function (value: any): void {
        console.log("siguiente [next]", value)
    },
    error: function (err: any): void {
        console.log("error [next]", err)
    },
    complete: function (): void {
        console.info("completado")
    }
}

const intervalo$ = new Observable<number>( subscriber => {
    
    let count =0;
    let interval = setInterval( ()=>{
        count++;
        subscriber.next(count)
        console.log(count)

    },1000)


    setTimeout( ()=>{
        subscriber.complete()
    },2500);

    return () => {
        clearInterval(interval);
        console.log("Intervalo destruido");
    }
})


const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);


subs1.add(subs2)
subs1.add(subs3);

setTimeout( ()=>{
    //const subs2 = intervalo$.subscribe( num => console.log( 'Num', num ));
    subs1.unsubscribe();
    //subs2.unsubscribe();
    //subs3.unsubscribe();

    console.log("completado timeout")
},6000);


