document.getElementById('formAsteriscos').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const n = document.getElementById('numberInput').value;
    const resultList = geraListaAsteriscos(n);
    
    const resultTextElement = document.getElementById('resultText');
    resultTextElement.textContent = JSON.stringify(resultList);
});


function geraListaAsteriscos(n) {
    const result = [];
    
    for (let i = 1; i <= n; i++) {
        result.push('*'.repeat(i));
    }
    
    return result;
}