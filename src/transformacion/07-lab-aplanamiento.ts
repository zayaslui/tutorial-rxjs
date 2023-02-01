import { catchError, exhaustMap, fromEvent, map, mergeMap, of, pluck, switchMap, tap } from "rxjs";
import { ajax } from "rxjs/ajax";

//helper

const peticionHttpLogin = (userPass) => 
    ajax
        .post('https://reqres.in/api/login?delay=1',userPass)
        .pipe(
            pluck('response','token'),
            catchError(err => of('Manejando el error'))
            )



//creando un formulario
const form          = document.createElement('form');
const inputEmail    = document.createElement('input');
const inputPass     = document.createElement('input');
const submitBtn     = document.createElement('button');


// configuraciones

inputEmail.type         = 'email';
inputEmail.placeholder  = 'email';
inputEmail.value        = 'eve.holt@reqres.in';


inputPass.type         = 'password';
inputPass.placeholder  = 'password';
inputPass.value        = 'cityslicka';


submitBtn.innerHTML='Ingresar'

form.append(inputEmail,inputPass,submitBtn);
document.querySelector('body').append(form);



//streams
const submitForm$ = fromEvent<Event>(form,'submit')
.pipe(
        tap(ev => ev.preventDefault()),
        map(ev => ({
                email       : ev.target[0].value,
                password    : ev.target[1].value 
            })
        ),
        //mergeMap(peticionHttpLogin)
        //switchMap(peticionHttpLogin)
        exhaustMap(peticionHttpLogin)
    )


submitForm$
.pipe()
.subscribe(token => {
    console.log(token);
})