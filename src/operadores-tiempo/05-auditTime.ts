import { asyncScheduler, auditTime, debounceTime, distinctUntilChanged, fromEvent, map, pluck, tap, throttleTime } from "rxjs";


const click$ = fromEvent<MouseEvent>( document, 'click');


click$
.pipe(
    map( ({x}) => ({x}) ),
    tap(val => console.log('tap',val)),
    auditTime(2000)
)
.subscribe(console.log)