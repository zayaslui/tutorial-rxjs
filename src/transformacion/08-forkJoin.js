import { catchError, forkJoin, of } from "rxjs";
import { ajax } from "rxjs/ajax";



const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'zayaslui';


forkJoin({
    usuario : ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}`
    ),
    repos : ajax.getJSON(
        `${GITHUB_API_URL}/repo12s3`
    ).pipe(catchError( err => of([]))),
    gists : ajax.getJSON(
        `${GITHUB_API_URL}/gits`
    ),

})
.pipe(
    catchError( err => of(err))
)
.subscribe(console.log)