//const printName = () => {
    //let helloName = "Hello John"
    //const inner = () => setTimeout(() => console.log(helloName),5000);
    //return inner
//}
//printName()();

function printName() {
    let helloName = "Hello John";
    setTimeout(
        function inner() {
            console.log(helloName);
        }, 2000);
}
printName();
