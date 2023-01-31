import { asyncScheduler, debounceTime, distinctUntilChanged, fromEvent, pluck, throttleTime } from "rxjs";


const click$ = fromEvent( document, 'click');


click$.pipe(throttleTime(3000))
//.subscribe(console.log)


//ejemplo 2

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');

input$
.pipe(
    throttleTime(2000, asyncScheduler, {
        leading     : true,
        trailing    : true
    }),
    pluck('target','value'),
    distinctUntilChanged()
)
.subscribe( console.log );
    /*
*/