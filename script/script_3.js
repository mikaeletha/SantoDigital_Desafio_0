document.getElementById('subsetForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const input = document.getElementById('numbersInput').value;
    const numberArray = input.split(',').map(Number).filter(num => !isNaN(num));
    
    const subsets = gerarSubConjuntos(numberArray);
    
    const resultTextElement = document.getElementById('resultText');
    resultTextElement.textContent = JSON.stringify(subsets);
    
    document.getElementById('resultContainer').style.display = 'block';
});

function gerarSubConjuntos(nums) {
    const result = [];
    
    nums.sort((a, b) => a - b);

    function backtrack(subset, start) {
        result.push([...subset]);
        
        for (let i = start; i < nums.length; i++) {
            subset.push(nums[i]);
            backtrack(subset, i + 1);
            subset.pop();
        }
    }
    
    backtrack([], 0);
    
    return result;
}