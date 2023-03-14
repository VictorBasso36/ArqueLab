

<?php
  //Variáveis
  $nome = $_POST['NAME'];
  $email = $_POST['EMAIL'];
  $telefone = $_POST['TELEFONE'];
  $empresa = $_POST['EMPRESA'];
  $mensagem = $_POST['MENSAGEM'];
  $data_envio = date('d/m/Y');
  $hora_envio = date('H:i:s');
  $arquivo = "
   
     $nome\r\n
      $email\r\n
      $telefone\r\n
      $empresa\r\n
      $mensagem\r\n
      Este e-mail foi enviado em $data_envio às $hora_envio\r\n
  
  ";
// O remetente deve ser um e-mail do seu domínio conforme determina a RFC 822.
// O return-path deve ser ser o mesmo e-mail do remetente.
$headers = "MIME-Version: 1.1\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8\r\n";
$headers .= "From: lab@arque.art.br\r\n"; // remetente
$headers .= "Return-Path: lab@arque.art.br\r\n"; // return-path
$envio = mail("lab@arque.art.br", "Contato Pelo Site", "$arquivo", $headers);
 
if($envio){

}
 
else{

}


 echo "<meta http-equiv='refresh' content='10;URL=http://baldoo.com.br/arquelab/'>";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1"> 
    <title>Document</title>
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
    <style>
        @font-face {
            font-family: 'McqueenBold';
            src: url('../../McQueenDisplayTrial-Bold.otf') format('opentype');
        }
        @font-face {
            font-family: 'McqueenMedium';
            src: url('../../McQueenDisplayTrial-Medium.otf') format('opentype');
        }
        @font-face {
            font-family: 'McqueenLight';
            src: url('../../McQueenDisplayTrial-Light.otf') format('opentype');
        }
        @font-face {
            font-family: 'GigantRegular';
            src: url('../../giganticfs-d9dor.ttf') format('truetype');
        }
        body{
            height: 100vh;
            width: 100vw;
            font-family: 'GigantRegular';
            padding: none;
            margin: none;
            overflow: hidden;
            height: 100vh;
            background-image: url('../img/allbg.png');
            display: flex;
            align-items: center;
            text-align: center;
            justify-content: center;
            flex-direction: column;
            color: aliceblue;
            font-size:120%;
        }
        span{
        
           color: #e71e76;;
        }
        h1{ width: 80vw;
            margin: 0;
            
        }

        .nave{
            width: 20%;
            animation-name: bounceInLeft;
            animation-duration: 3s;
        }
    </style>
</head>
<body>
    <h1>Mensagem <span>Enviada</span> </h1>
    <h1>Com <span style="color: #55a8b2;">Sucesso</span>. </h1>
    <img class="nave" src="../img/Discovoador.png" alt="">
</body>
</html>