import { debounceTime, fromEvent, map, mergeAll, Observable, pluck, switchMap, tap } from "rxjs";
import { ajax } from "rxjs/ajax";


export interface GithubUsers {
    login:               string;
    id:                  number;
    node_id:             string;
    avatar_url:          string;
    gravatar_id:         string;
    url:                 string;
    html_url:            string;
    followers_url:       string;
    following_url:       string;
    gists_url:           string;
    starred_url:         string;
    subscriptions_url:   string;
    organizations_url:   string;
    repos_url:           string;
    events_url:          string;
    received_events_url: string;
    type:                Type;
    site_admin:          boolean;
}

export enum Type {
    Organization = "Organization",
    User = "User",
}

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
//.subscribe(mostrarUsuarios);


const url = 'https://httpbin.org/delay/1?arg=';

input$
.pipe(
    pluck('target','value'),
    switchMap( texto => ajax.getJSON(url + texto))
)
.subscribe(console.log)