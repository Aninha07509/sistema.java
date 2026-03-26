const API = "http://localhost:3000";

// ===============================
// CLIENTE
// ===============================
document.getElementById("btnCliente").addEventListener("click", async () => {
  const nome = document.getElementById("nome").value;
  const cpf = document.getElementById("cpf").value;

  const res = await fetch(API + "/cliente", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ nome, cpf })
  });

  const data = await res.json();
  alert(data.mensagem || data.erro);
});

// ===============================
// CONTA
// ===============================
document.getElementById("btnConta").addEventListener("click", async () => {
  const cpf = document.getElementById("cpfConta").value;
  const banco = document.getElementById("banco").value;
  const agencia = document.getElementById("agencia").value;
  const conta = document.getElementById("conta").value;

  const res = await fetch(API + "/conta", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ cpf, banco, agencia, conta })
  });

  const data = await res.json();
  alert(data.mensagem || data.erro);
});

// ===============================
// RESTRIÇÃO
// ===============================
document.getElementById("btnRestricao").addEventListener("click", async () => {
  const cpf = document.getElementById("cpfRestricao").value;
  const descricao = document.getElementById("descricao").value;

  const res = await fetch(API + "/restricao", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ cpf, descricao })
  });

  const data = await res.json();
  alert(data.mensagem || data.erro);
});

// ===============================
// CONSULTA
// ===============================
document.getElementById("btnConsulta").addEventListener("click", async () => {
  const cpf = document.getElementById("cpfConsulta").value;

  const res = await fetch(API + "/cliente/" + cpf);
  const data = await res.json();

  const div = document.getElementById("resultado");

  if (data.erro) {
    div.innerHTML = data.erro;
    return;
  }

  let html = `
    <p><strong>Nome:</strong> ${data.cliente.nome}</p>
    <p><strong>CPF:</strong> ${data.cliente.cpf}</p>
    <h4>Contas:</h4>
  `;

  data.contas.forEach(c => {
    html += `<p>${c.banco} - ${c.agencia} - ${c.conta}</p>`;
  });

  html += `<h4>Restrições:</h4>`;

  if (data.restricoes.length === 0) {
    html += `<p>Sem restrições</p>`;
  } else {
    data.restricoes.forEach(r => {
      html += `<p>${r.descricao}</p>`;
    });
  }

  div.innerHTML = html;
});