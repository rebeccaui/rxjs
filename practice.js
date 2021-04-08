
// Helper code to print values
function print(val) {
    let el = document.createElement('p');
    el.innerText = val;
    document.body.appendChild(el);
}


// Observable: an array that gets built over time
// Loop over by subscribing

//===================================

//Create an Observable
//Define what the Observable sends to the subscriber
const observable = rxjs.Observable.create(observer => {
        observer.next('hello');
})

//Make the Observable start emitting values by calling subscribe on it
//Make each value print to the screen
observable.subscribe(val => print(val));

//===================================

//Create an Observable from click events in the DOM
const clicks = rxjs.fromEvent(document, 'click');

//Then subscribe to it
clicks.subscribe(clickVal => console.log(clickVal));

//===================================

//Convert a Promise into an Observable
//For API calls or async operations
//NOTE: As of rxjs 6.0.0-beta.3, operators and observable creators 
//should be imported from rxjs. 

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('resolved!');
//     }, 1000)
// })

//fromPromise() converts a Promise to an Observable
//useful method for libraries built on promises 
//toPromise() converts an Obseravble to a Promise
    
//const obsvPromise = rxjs.Observable.fromPromise(promise);

//obsvPromise.subscribe(results => print(results));

//===================================

//Create a Timer
// const timer = rxjs.Observable.timer(1000);

//Subscribe to it
// timer.subscribe(done => print('ding!'));

//===================================

//Create a repeating Timer
// const interval = rxjs.Observable.interval(1000);

//Subscribe to it
// interval.subscribe(int => print( new Date().getSeconds() ));

//===================================

//Using the unsubscribe method after subscribing to an Observable
function AsyncStream(observer) {
    let t1 = setInterval(() => {
        observer.next(Math.random());
    }, 1000);
}
let observ = rxjs.Observable.create(AsyncStream);

let subscription = observ.subscribe(res => Listener(res));

function Listener(res) {
    console.log(res);
    subscription.unsubscribe();
}

//===================================

