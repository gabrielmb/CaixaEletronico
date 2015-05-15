var app = angular.module('Caixa', []);

app.controller('NotasNoCaixa',function($scope){

  $scope.notas = [0,0,0,0];
  
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
