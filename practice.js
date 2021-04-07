// Observable: an array that gets built over time
// Loop over by subscribing

//Create an observable
const observable = Rx.Observable.create(observer => {
        observer.next('hello');
})

//Make the observable start emitting values by calling subscribe on it
//Make each value print to the screen
observable.subscribe(val => print(val));


// Helper code to print values
function print(val) {
    let el = document.createElement('p');
    el.innerText = val;
    document.body.appendChild(el);
}