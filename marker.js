# MarkerSaldo
Code.js

<!DOCTYPE html>
<html>
  <head>    
    <meta charset="UTF-8"/>
    <script type="text/javascript">
     

      function exibirMensagem()
      {
      alert('Olá, seja bem vindo(a)!');
      }

      var Saldo;
      var NumeroPessoas; 
      NumeroPessoas = prompt(" Qual o numero de pessoas a contratar ?");
      Saldo = prompt('Qual é o valor do saldo?');

      var dias = 20;
      var Horas = 8;
      var resultado = NumeroPessoas * (dias*(34.50*Horas));
      alert('O Valor final do investimento sera : '+ resultado);
    </script>
  </head>
  <body>
  </body>
</html>


