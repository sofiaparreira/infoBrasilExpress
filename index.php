<?php

// Seus dados de configuração de email (substitua com suas informações):
$email_remetente = "seu_email@seudominio.com.br";
$nome_remetente = "Nome do Remetente";
$senha_remetente = "sua_senha_de_email";

// Dados do formulário recebidos via POST
$nome = $_POST['nome'];
$endereco = $_POST['endereco'];
$telefone = $_POST['telefone'];
$email_destinatario = $_POST['email']; // Utilize o email do cliente

// Assunto do email
$assunto = "Formulário de Assistência Técnica - " . $nome;

// Corpo do email (você pode personalizá-lo)
$mensagem = "
*Dados do Cliente:*

Nome: $nome
Endereço: $endereco
Telefone: $telefone
Email: $email_destinatario

";

// Cabeçalhos do email
$headers = "From: $nome_remetente <$email_remetente>\r\n";
$headers .= "Reply-To: $email_destinatario\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=utf-8\r\n";

// Enviando o email
if (mail($email_destinatario, $assunto, $mensagem, $headers)) {
    echo "<script>alert('Email enviado com sucesso!')</script>";
} else {
    echo "<script>alert('Falha no envio do email. Tente novamente mais tarde.')</script>";
}

?>