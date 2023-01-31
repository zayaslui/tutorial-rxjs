import { asyncScheduler, debounceTime, distinctUntilChanged, fromEvent, interval, pluck, sample, throttleTime } from "rxjs";


const interval$ = interval(5000);
const click$ = fromEvent( document, 'click');

interval$.pipe(
    sample(click$)
)
.subscribe(console.log)