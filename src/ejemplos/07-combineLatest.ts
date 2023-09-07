import { Observable, combineLatest, of } from 'rxjs';
import { map, mergeMap, switchMap } from 'rxjs/operators';


(() =>{



  const observable1$: Observable<string[]> = of(['A', 'B', 'C']);
  const observable2$: Observable<string[]> = of(['X', 'Y', 'Z']);
  const observable3$: Observable<number[]> = of([1, 2, 3]);
  
  combineLatest([observable1$, observable2$, observable3$])
    .pipe(
      map(([result1, result2, result3]: [string[], string[], number[]]) => {
        console.log(result1, result2, result3);
        console.log(sumar(result3));
      })
    ).subscribe()
  
  function sumar(numeros: number[]): number {
    let suma: number = 0;
  
    numeros.forEach((numero) => {
      suma = suma + numero;
    });
    return suma;
  }
  

})();

		
