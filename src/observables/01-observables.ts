import { Observable, Observer } from "rxjs";

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


const obs$ = new Observable<string>( subs => {

    subs.next("hola");
    subs.next("mundo");

    //forzar un error
    //const a = undefined;
    //a.nombre = 'luis';


    subs.complete();    

    subs.next("hola");
    subs.next("mundo");

})
/*
obs$.subscribe(
    valor => console.log('next',valor),
    error => console.warn('error : ', error),
    () => console.info('completado : ')
    )
*/


obs$.subscribe(observer)