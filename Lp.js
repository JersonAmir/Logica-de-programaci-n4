function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

document.getElementById('generateButton').addEventListener('click', function () {
    let input = document.getElementById('numberInput').value;
    while (isNaN(input) || input.trim() === "") {
        input = prompt("Error. Por favor, ingrese un número válido:");
    }
    const num = parseInt(input);
    const fibonacciSeries = [];
    for (let i = 0; i < num; i++) {
        fibonacciSeries.push(fibonacci(i));
    }
    console.log("Serie de Fibonacci:");
    console.log(fibonacciSeries);

    const resultDiv = document.getElementById('result');
    if (resultDiv) {
        resultDiv.innerText = `Serie de Fibonacci: ${fibonacciSeries.join(", ")}`;
    }
});