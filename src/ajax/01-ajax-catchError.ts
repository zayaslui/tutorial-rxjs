import { catchError, map, of, pluck } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";

//fetch trabaja con promesas y no observables
const url = 'https://api.github.com/users?per_page=5';

const manejadorErrores = (response : Response) => {
    if(!response.ok){
        throw new Error(response.statusText);
    }
    return response
}

const atrapaError = (err: AjaxError) => {
    console.warn("Error en : ", err.message)
    return of([]); 
}
/*

const fetchPromesa = fetch( url );

fetchPromesa
    .then(resp => resp.json())
    .then(data => console.log("data : ",data))
    .catch(err => console.warn('error :', err))
    
    fetchPromesa
    .then(manejadorErrores)
    .then(resp => resp.json())
    .then(data => console.log("data : ",data))
    .catch(err => console.warn('error :', err))
*/

ajax(url)
.pipe(
    //map(resp => resp?.response)
    pluck('response'),
    catchError(atrapaError)
)
.subscribe(console.log)