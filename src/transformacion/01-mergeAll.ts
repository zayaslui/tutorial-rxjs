import { debounceTime, fromEvent, map, mergeAll, Observable, pluck, tap } from "rxjs";
import { ajax } from "rxjs/ajax";
import { GithubUsers } from "./interfaces/GithubUsers";



//helpers 
const mostrarUsuarios = ( usuarios : GithubUsers[]) => {
    console.log(usuarios)
    orderList.innerHTML="";
    for (const usuario of usuarios) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url

        const anchor =document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver pagina';
        anchor.target = '_blank';

        li.append(img);
        li.append(usuario.login + ' ');
        li.append(anchor);
        
        orderList.append(li);

    }
}

const body = document.querySelector('body');
const textInput = document.createElement('input')
const orderList = document.createElement('ol');
body.append(textInput,orderList);




//streams
const input$ = fromEvent<KeyboardEvent>(textInput,'keyup');

input$
.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent, any, any>('target','value'),
    //tap(console.log),
    map<string, Observable<GithubUsers[]>>( texto => {
        return ajax.getJSON(
            `https://api.github.com/users?q=${texto}`
        );
    }),
    mergeAll<Observable<GithubUsers[]>>(),
    //pluck(),
    //tap(console.log )
)
.subscribe(mostrarUsuarios);