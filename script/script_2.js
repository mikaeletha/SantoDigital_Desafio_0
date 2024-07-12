document.getElementById('arrayForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const array = transformaEmArray();
    const pares = encontrarParesComMenorDiferenca(array);
    
    const resultTextElement = document.getElementById('result');
    resultTextElement.textContent = JSON.stringify(pares);
});

function transformaEmArray() {
    const input = document.getElementById('numberInput').value;
    const array = input.split(',').map(Number).filter(num => !isNaN(num));

    return array;
}

function encontrarParesComMenorDiferenca(nums) {
    if (nums.length < 2) {
        return [];
    }
    
    nums.sort((a, b) => a - b);
    
    let menorDiferenca = Infinity;
    let pares = [];
    
    for (let i = 1; i < nums.length; i++) {
        const diferenca = Math.abs(nums[i] - nums[i - 1]);
        
        if (diferenca < menorDiferenca) {
            menorDiferenca = diferenca;
            pares = [[nums[i - 1], nums[i]]];
        } else if (diferenca === menorDiferenca) {
            pares.push([nums[i - 1], nums[i]]);
        }
    }
    
    return pares;
}