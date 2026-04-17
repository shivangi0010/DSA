// Fibonacci Number

function printFib(n) {
    let first = 0;
    let second = 1;

    console.log(first);
    if (n > 1) console.log(second);

    for (let i = 2; i < n; i++) {
        let next = first + second;
        console.log(next);

        first = second;
        second = next;
    }
}
printFib(10);