import { catchError, map, of, pluck } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";

const url = 'https://httpbin.org/delay/1';
//const url = 'https://api.github.com/users?per_page=5';

const manejadorErrores = (response : AjaxError) => {
    console.warn('error: ',response.message);
    return of({
        ok          : false,
        usuarios    :[]
    });
}


const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

//diferencias ????
/*
obs$
.pipe(catchError(manejadorErrores))
.subscribe(data => console.log('getJSON: ',data));

obs2$
.pipe(catchError(manejadorErrores))
.subscribe(data => console.log('ajax: ',data));
obs$
.pipe(catchError(manejadorErrores))
.subscribe(data => console.log('getJSON: ',data));
*/


obs2$
.pipe(
    catchError(manejadorErrores)
)
.subscribe({
    next : val => console.log('next: ',val),
    error: err => console.warn('error en subs:',err),
    complete: () => console.log('complete')
});
