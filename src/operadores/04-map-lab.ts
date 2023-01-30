import { fromEvent, map, tap } from "rxjs";


const texto = document.createElement('div');
texto.innerHTML = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt mattis velit, ac fringilla risus fermentum id. Fusce pretium scelerisque dignissim. Cras luctus sed risus et semper. Curabitur eleifend ante in massa aliquet convallis eget sit amet augue. Praesent massa ligula, varius non pulvinar quis, mattis eget erat. Nunc dignissim maximus quam, non posuere arcu tincidunt nec. Morbi pellentesque augue quis orci blandit auctor. Aenean id cursus dui. Morbi in sapien vehicula, fermentum erat vel, gravida diam. Morbi ut purus rutrum, tempor diam a, vestibulum velit. Proin congue dui urna, in volutpat lectus accumsan vitae. Aenean non neque nunc. Mauris ullamcorper ac elit et faucibus. Aenean tincidunt nisi ut porta gravida.
    <br/>
    <br/>
    Curabitur in tortor condimentum libero volutpat mollis a et tortor. Nulla sagittis molestie nibh, id euismod velit scelerisque at. Donec sit amet sapien rutrum, consequat felis eget, congue lacus. Suspendisse ac turpis sed dolor porttitor rhoncus nec condimentum ipsum. Etiam posuere ante sed aliquam ullamcorper. Nam vitae semper orci. Quisque consequat diam non vehicula tincidunt. Curabitur non euismod diam. Ut aliquet vulputate magna, sit amet faucibus elit dapibus at. Donec porta vehicula dignissim. Quisque vel tellus id nisl rutrum condimentum fermentum eu augue. Nam a arcu elementum, ornare turpis ac, tincidunt justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nec enim eros.
    <br/>
    <br/>
    Morbi imperdiet nibh neque. Nam in massa sollicitudin, venenatis nisl quis, rhoncus tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sit amet tellus congue lacus fringilla blandit. Aliquam eu mi vel odio scelerisque pretium. Aenean elementum feugiat turpis, a finibus ante imperdiet vitae. Fusce sem magna, sodales in diam vel, tempor dictum metus. Fusce odio mauris, hendrerit non metus vitae, porta consequat nisi. Suspendisse augue justo, hendrerit in mattis eget, venenatis quis metus. Phasellus rutrum nunc bibendum ultrices malesuada.
    <br/>
    <br/>
    Quisque hendrerit, leo sit amet pellentesque bibendum, augue nisi iaculis velit, sed rhoncus felis nulla sed justo. Praesent a est ut ligula congue lacinia. Suspendisse lobortis mauris et ante bibendum, sit amet imperdiet leo finibus. Maecenas ullamcorper, lectus non elementum mollis, est nisi pulvinar enim, sit amet placerat nibh nisi et nunc. Donec vestibulum risus ut erat varius luctus. Phasellus eu eros sed ante tincidunt hendrerit volutpat in magna. Nulla vitae neque quis massa congue dictum. Cras aliquet lacus eu feugiat facilisis. Vestibulum at molestie sem.
    <br/>
    <br/>
    Mauris ultricies velit lobortis urna tincidunt viverra. Quisque pharetra sem lectus, vel hendrerit augue fringilla iaculis. In sit amet leo eget velit pellentesque ornare. Suspendisse auctor vitae libero eget dictum. Quisque tristique nulla dui, ac accumsan leo congue et. Duis id erat sed nisl sodales semper eget eget ipsum. Quisque eget lobortis metus, at elementum odio.
    <br/>
    <br/>
    Mauris ultricies velit lobortis urna tincidunt viverra. Quisque pharetra sem lectus, vel hendrerit augue fringilla iaculis. In sit amet leo eget velit pellentesque ornare. Suspendisse auctor vitae libero eget dictum. Quisque tristique nulla dui, ac accumsan leo congue et. Duis id erat sed nisl sodales semper eget eget ipsum. Quisque eget lobortis metus, at elementum odio.
    <br/>
    <br/>
    Mauris ultricies velit lobortis urna tincidunt viverra. Quisque pharetra sem lectus, vel hendrerit augue fringilla iaculis. In sit amet leo eget velit pellentesque ornare. Suspendisse auctor vitae libero eget dictum. Quisque tristique nulla dui, ac accumsan leo congue et. Duis id erat sed nisl sodales semper eget eget ipsum. Quisque eget lobortis metus, at elementum odio.
    <br/>
    <br/>
    Mauris ultricies velit lobortis urna tincidunt viverra. Quisque pharetra sem lectus, vel hendrerit augue fringilla iaculis. In sit amet leo eget velit pellentesque ornare. Suspendisse auctor vitae libero eget dictum. Quisque tristique nulla dui, ac accumsan leo congue et. Duis id erat sed nisl sodales semper eget eget ipsum. Quisque eget lobortis metus, at elementum odio.
    <br/>
    <br/>
    Mauris ultricies velit lobortis urna tincidunt viverra. Quisque pharetra sem lectus, vel hendrerit augue fringilla iaculis. In sit amet leo eget velit pellentesque ornare. Suspendisse auctor vitae libero eget dictum. Quisque tristique nulla dui, ac accumsan leo congue et. Duis id erat sed nisl sodales semper eget eget ipsum. Quisque eget lobortis metus, at elementum odio.
    <br/>
    <br/>
    Mauris ultricies velit lobortis urna tincidunt viverra. Quisque pharetra sem lectus, vel hendrerit augue fringilla iaculis. In sit amet leo eget velit pellentesque ornare. Suspendisse auctor vitae libero eget dictum. Quisque tristique nulla dui, ac accumsan leo congue et. Duis id erat sed nisl sodales semper eget eget ipsum. Quisque eget lobortis metus, at elementum odio.
    <br/>
    <br/>
    Mauris ultricies velit lobortis urna tincidunt viverra. Quisque pharetra sem lectus, vel hendrerit augue fringilla iaculis. In sit amet leo eget velit pellentesque ornare. Suspendisse auctor vitae libero eget dictum. Quisque tristique nulla dui, ac accumsan leo congue et. Duis id erat sed nisl sodales semper eget eget ipsum. Quisque eget lobortis metus, at elementum odio.
    <br/>
    <br/>
    Mauris ultricies velit lobortis urna tincidunt viverra. Quisque pharetra sem lectus, vel hendrerit augue fringilla iaculis. In sit amet leo eget velit pellentesque ornare. Suspendisse auctor vitae libero eget dictum. Quisque tristique nulla dui, ac accumsan leo congue et. Duis id erat sed nisl sodales semper eget eget ipsum. Quisque eget lobortis metus, at elementum odio.
    <br/>
    <br/>
    Mauris ultricies velit lobortis urna tincidunt viverra. Quisque pharetra sem lectus, vel hendrerit augue fringilla iaculis. In sit amet leo eget velit pellentesque ornare. Suspendisse auctor vitae libero eget dictum. Quisque tristique nulla dui, ac accumsan leo congue et. Duis id erat sed nisl sodales semper eget eget ipsum. Quisque eget lobortis metus, at elementum odio.
    <br/>
    <br/>
    Mauris ultricies velit lobortis urna tincidunt viverra. Quisque pharetra sem lectus, vel hendrerit augue fringilla iaculis. In sit amet leo eget velit pellentesque ornare. Suspendisse auctor vitae libero eget dictum. Quisque tristique nulla dui, ac accumsan leo congue et. Duis id erat sed nisl sodales semper eget eget ipsum. Quisque eget lobortis metus, at elementum odio.
`;

const body = document.querySelector('body');

body.append(texto);


const progressBar = document.createElement('div');
progressBar.setAttribute('class','progress-bar');

body.append(progressBar);



//streams 
const scrolls$ = fromEvent(document, 'scroll');
//scrolls$.subscribe(console.log);


const calcularPorcentajeScroll = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement
    
    console.log((scrollTop/(scrollHeight-clientHeight)));

    return (scrollTop/(scrollHeight-clientHeight)*100)
    
}

const progress$ = scrolls$.pipe(
    map(event => calcularPorcentajeScroll(event)),
    tap( console.log)
);


progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`
})










