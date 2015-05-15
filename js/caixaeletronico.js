var app = angular.module('Caixa', []);

app.controller('NotasNoCaixa',function($scope){

  $scope.notas = [0,0,0,0];
  /*Saca por notas, passando quais notas e seus valores*/
  $scope.Saca = function(valor,quant){
    if(quant < 0){
      alert("Não aceitamos valores negativos!");
    }else{
      if(valor == 100){
        if((nota100 - quant) >= 0 && quant > 0){
          nota100 -= quant;
          $scope.notas.splice(0,1,nota100);
        }else{
          alert("Notas insuficientes!");
        }
      }else if(valor == 50){
        if((nota50 - quant)>= 0 && quant > 0){
          nota50 -= quant;
          $scope.notas.splice(1,1,nota50);
        }else{
          alert("Notas insuficientes!");
        }
      }else if(valor == 20 && quant > 0){
        if((nota20 - quant) >= 0){
          nota20 -= quant;
          $scope.notas.splice(2,1,nota20);
        }else{
          alert("Notas insuficientes!");
        }
      }else if(valor == 10 && quant > 0){
        if((nota10 - quant) >= 0){
          nota10 -= quant;
          $scope.notas.splice(3,1,nota10);
        }else{
          alert("Notas insuficientes!");
        }
      }else{
          alert("Valor Invalido");
      }
    }
  };

  /*Saca por valor e separa as notas*/
  $scope.SaqueValor = function(qtd){
    var cem = 0;
    var cin = 0;
    var vin = 0;
    var dez = 0;

    var temp = 0;

    /*Validações das notas*/

    if(qtd >= 10){
      if((qtd/100) > 0){
        cem = parseInt(qtd / 100);
        temp = qtd - (cem * 100);
        if((temp/50) > 0){
          cin = parseInt(temp / 50);
          temp = qtd - ((cem * 100) + (cin * 50));
          if((temp/20) > 0){
            vin = parseInt(temp / 20);
            temp = qtd - ((cem * 100) + (cin * 50)+ (vin * 20));
            if((temp/10) > 0){
              dez = parseInt(temp / 10);
            }
          }
        }
      }else if((qtd / 50) > 0 ){
        cin = parseInt(qtd / 50);
        temp = qtd - (cin * 50);
        if((temp /20) > 0){
          vin = parseInt(temp / 20);
          temp = qtd - ((cin * 50)+(vin * 20));
          if((temp/10)>0){
            dez = parseInt(temp / 10);
          }
        }

      }else if((qtd / 20) > 0){
        vin = parseInt(qtd / 20);
        temp = qtd - (vin * 20);
        if((temp/10) > 0){
          dez = parseInt(temp / 10);
        }

      }else if((qtd / 10) > 0){
        dez = parseInt(qtd / 10);
      }

      alert(cem+" nota(s) de 100.\n"+cin+" nota(s) de 50.\n"+vin+" nota(s) de 20.\n"+dez+" nota(s) de 10.");
    }else{
      alert("Valor Invalido");
    }

    $scope.notas.splice(0,1,cem);

    $scope.notas.splice(1,1,cin);

    $scope.notas.splice(2,1,vin);

    $scope.notas.splice(3,1,dez);


  };

});
