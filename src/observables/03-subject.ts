import { Observable, Observer, Subject } from "rxjs"

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
    
    let intervalID = setInterval( ()=>{
        subscriber.next(Math.random())
        console.log("ejecutando intervalo...")
    },1000)


    return () => {
        clearInterval(intervalID);
        console.log("Intervalo destruido");
    }

})


//const subs1 = intervalo$.subscribe(rnd => console.log('sub1 :',rnd))
//const subs2 = intervalo$.subscribe(rnd => console.log('sub2 :',rnd))

/*
    1 - castor multiple
    2 - tambien es un observer
    3 - next,error,complete
*/


const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);

//const subs1 = subject$.subscribe(rnd => console.log('sub1 :',rnd));
//const subs2 = subject$.subscribe(rnd => console.log('sub2 :',rnd));

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);



setTimeout( () => {
     subject$.next(10);
     subject$.complete();

     //para desubscribirnos del observable del intervalo
     subscription.unsubscribe();
},3500)