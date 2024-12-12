function verificarCredenciais(event) {
  event.preventDefault();

  const usuario = document.getElementById("exampleInputEmail1").value;
  const senha = document.getElementById("exampleInputPassword1").value;

  if (usuario === "Motoclube" && senha === "12345678") {
    window.location.href = "logado.html";
  } else if (usuario !== "Motoclube" && senha !== "12345678") {
    swal("Erro", "usuario e senha incorreto.", "error");
  } else if (usuario !== "Motoclube") {
    swal("Erro", "usuario incorreto.", "error");
  } else if (senha !== "12345678") {
    swal("Erro", "senha incorreto.", "error");
  }
}

// Selecionando os botões e a div de sobre
const reabastecerBtn = document.getElementById("reabastecerBtn");
const melhoriasBtn = document.getElementById("melhoriasBtn");
//const suspenderBtn = document.getElementById("suspenderBtn");
const sobreDiv = document.getElementById("sobre");

// Função para alterar o conteúdo e o estilo da div#sobre
function alterarSobre(acao) {
    if (acao === 'reabastecer') {
        sobreDiv.innerHTML = `
            <div id="status_ativo">
                <p
                    style="margin-top: 1.5%; margin-right: 1.5%; margin-bottom: 1.5%; margin-left: 4%; color: rgb(3, 175, 3); font-size: 1.8em;">
                    STATUS:</p>
                <p style="margin-top: 1.5%; font-size: 1.8em;">ATIVO</p>
            </div>
            <div id="estoque">
                <p>Estoque</p>
                <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0"
                    aria-valuemax="100" style="width: 70%; border-radius: 0; margin-top: 15px;  margin-left: 108px;">
                    <div class="progress-bar" style="width: 25%; background-color: rgb(3, 175, 3); width: 5%;"></div>
                </div>
            </div>
            <div id="suprimentos">
                <p>Suprimentos</p>
                <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0"
                    aria-valuemax="100" style="width: 70%; border-radius: 0; margin-top: 15px;  margin-left: 60px;">
                    <div class="progress-bar" style="width: 25%; background-color: rgb(3, 175, 3); width: 95%;"></div>
                </div>
            </div>
            <div style="display: flex;flex-direction: column;gap: 10px;align-items: center;padding-top: 12%;margin-bottom: 148px;">
                <button style="width: 60%; border: none; background-color: rgb(3, 175, 3); color: white;">
                    <div style="display: flex;justify-content: space-between;">
                        <p style="margin-left: 15px; margin-top: 15px; font-size: 1.2em;">Comprar Suprimentos</p>
                        <p style="margin-right: 15px; margin-top: 18px; font-size: 1.2em;">$15,000</p>
                    </div>
                </button>
                <button style="width: 60%; border: none; background-color: rgb(3, 175, 3); color: white;">
                    <div style="display: flex;justify-content: space-between;">
                        <p style="margin-left: 15px; margin-top: 15px; font-size: 1.2em;">Roubar suprimentos</p>
                    </div>
                </button>
            </div>
            <button style="width: 100%; border: none; padding: 0; background: none; outline: none;">
                <div style="background-color: rgb(3, 175, 3);color: white;height: 81px;display: flex;align-items: center;">
                    <h1 style="margin-left: 20px;">Vender estoque</h1>
                </div>
            </button>
        `;
    } else if (acao === 'melhorias') {
        sobreDiv.innerHTML = `
            <div id="status_ativo">
                <p
                    style="margin-top: 1.5%; margin-right: 1.5%; margin-bottom: 1.5%; margin-left: 4%; color: rgb(3, 175, 3); font-size: 1.8em;">
                    STATUS:</p>
                <p style="margin-top: 1.5%; font-size: 1.8em;">ATIVO</p>
            </div>
            <div id="estoque">
                <p>Estoque</p>
                <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0"
                    aria-valuemax="100" style="width: 70%; border-radius: 0; margin-top: 15px;  margin-left: 108px;">
                    <div class="progress-bar" style="width: 25%; background-color: rgb(3, 175, 3); width: 5%;"></div>
                </div>
            </div>
            <div id="suprimentos">
                <p>Suprimentos</p>
                <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0"
                    aria-valuemax="100" style="width: 70%; border-radius: 0; margin-top: 15px;  margin-left: 60px;">
                    <div class="progress-bar" style="width: 25%; background-color: rgb(3, 175, 3); width: 95%;"></div>
                </div>
            </div>
            <div style="padding: 15px; display: flex; justify-content: space-around; ">
                <div style="display: flex; flex-direction: column; margin: 5px;">
                    <img src="img/maquinas.webp" alt="" style="width: 100%; height: 100%;">
                    <button type="button" class="btn btn-success"
                        style="width: 100%; margin-top: 10px; height: 80px; border-radius: 0px; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; border: none; background-color: rgb(3, 175, 3);">
                        <span style="display: block;">Equipamentos</span>
                        <span style="display: block; margin-left: 0;">$800,000</span>
                    </button>
                </div>
                <div style="display: flex; flex-direction: column; margin: 5px;">
                    <img src="img/funcionarios.jpg" alt="" style="width: 100%; height: 100%;">
                    <button type="button" class="btn btn-success"
                        style="width: 100%; margin-top: 10px; height: 80px; border-radius: 0px; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; border: none; background-color: rgb(3, 175, 3);">
                        <span style="display: block;">Funcionarios</span>
                        <span style="display: block; margin-left: 0;">$273,000</span>
                    </button>
                </div>
                <div style="display: flex; flex-direction: column; margin: 5px;">
                    <img src="img/segurança.jpg" alt="" style="width: 100%; height: 100%;">
                    <button type="button" class="btn btn-success"
                        style="width: 100%; margin-top: 10px; height: 80px; border-radius: 0px; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; border: none; background-color: rgb(3, 175, 3);">
                        <span style="display: block;">Segurança</span>
                        <span style="display: block; margin-left: 0;">$456,000</span>
                    </button>
                </div>
            </div>
            <button style="width: 100%; border: none; padding: 0; background: none; outline: none;">
                <div style="background-color: rgb(3, 175, 3);color: white;height: 81px;display: flex;align-items: center;">
                    <h1 style="margin-left: 20px;">Vender estoque</h1>
                </div>
            </button>
        `;

    }
}

// Adicionando os manipuladores de evento para os botões
reabastecerBtn.addEventListener('click', function() {
    alterarSobre('reabastecer');
});

melhoriasBtn.addEventListener('click', function() {
    alterarSobre('melhorias');
});

//suspenderBtn.addEventListener('click', function() {
    //alterarSobre('suspender');
//});