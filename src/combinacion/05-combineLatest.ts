import { combineLatest, concat, fromEvent, interval, merge, of, pluck, take } from "rxjs";

/*
const keyup$ = fromEvent(document,'keyup');
const click$ = fromEvent(document,'click');

combineLatest(
    keyup$.pipe(pluck('type')),
    click$.pipe(pluck('type')),
    )
    .subscribe(
        console.log
        )
*/

const input = document.createElement('input');
const input2 = document.createElement('input');

input.placeholder = 'email@gmail.com';

input2.placeholder = '+++++++++';
input2.type = 'password';

document.querySelector('body').append(input, input2)


///helper

const getInputStream = (elem : HTMLElement) =>  fromEvent<KeyboardEvent>(elem, 'keyup').pipe(
    pluck<KeyboardEvent,any,string>('target','value')
)


combineLatest(
    getInputStream(input),
    getInputStream(input2)
).subscribe(console.log)
