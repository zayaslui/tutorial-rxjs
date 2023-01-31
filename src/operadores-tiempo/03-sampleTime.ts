import { asyncScheduler, debounceTime, distinctUntilChanged, fromEvent, map, pluck, sampleTime, throttleTime } from "rxjs";


const click$ = fromEvent<MouseEvent>( document, 'click');


click$.pipe(
    map( ({x,y}) => ({x,y}) ),
    sampleTime(1000)
)
.subscribe(console.log)

