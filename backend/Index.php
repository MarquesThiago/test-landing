<?php 

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");


// $dat = json_decode(file_get_contents("php://input")); // Assim você lê o faz o decode
// echo $dat->nome; // Acessa a propriedade nome do objeto json postado.
$dat = $_POST['nome'];
echo $dat -> nome;


//tentnado acesso  requisição envia da por medo post
echo file_get_contents("php://input");


//verificando se a requisição  chegando e se esta chegando algum valor 
$userName = "user";
$host_ = "localhost";
$password = "password";
$database = "tin";
$con = mysqli_connect($host_, $userName, $password, $database);
$inserTO = "INSERT iNTO data (nome) VALUES ('$dat') ";


if(mysqli_query($con, $inserTO)){
    echo "foi";
    
}else{
    echo "não foi";
    
}

echo "valor".$dat. "ret";
?>