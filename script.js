const umidade = document.getElementById("umidade");
const temperatura = document.getElementById("temperatura");
const vento = document.getElementById("vento");

const valorUmidade = document.getElementById("valorUmidade");
const valorTemperatura = document.getElementById("valorTemperatura");
const valorVento = document.getElementById("valorVento");

let pontos = 0;

umidade.addEventListener("input", () => {
    valorUmidade.textContent = umidade.value + "%";
});

temperatura.addEventListener("input", () => {
    valorTemperatura.textContent = temperatura.value + "°C";
});

vento.addEventListener("input", () => {
    valorVento.textContent = vento.value + " km/h";
});

function gerarPrevisao() {
    const u = parseInt(umidade.value);
    const t = parseInt(temperatura.value);
    const v = parseInt(vento.value);

    let chanceChuva = 0;

    if (u > 70) chanceChuva += 50;
    if (u > 85) chanceChuva += 20;

    if (t < 25) chanceChuva += 15;

    if (v > 30) chanceChuva += 15;

    const resultado = document.getElementById("resultado");
    const pontosTela = document.getElementById("pontos");

    if (chanceChuva >= 60) {
        resultado.innerHTML =
            "🌧️ Grande chance de chuva na lavoura! Recomenda-se adiar pulverizações.";
        resultado.style.background = "#bbdefb";
        pontos += 10;
    } else {
        resultado.innerHTML =
            "☀️ Baixa chance de chuva. Boas condições para atividades agrícolas.";
        resultado.style.background = "#c8e6c9";
        pontos += 5;
    }

    pontosTela.textContent = pontos;
}
