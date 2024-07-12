function carregarNavbar() {
    fetch('menu.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('menu').innerHTML = data;
    })
    .catch(error => {
        console.error('Erro ao carregar a barra de navegação:', error);
    });
}
document.addEventListener('DOMContentLoaded', carregarNavbar);