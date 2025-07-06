function imc() {
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado");
  
    form.addEventListener("submit", function(evento) {
      evento.preventDefault(); // Impede o recarregamento da página
  
      const inputPeso = document.querySelector("#inputPeso");
      const inputAltura = document.querySelector("#inputAltura");
  
      const peso = parseFloat(inputPeso.value.replace(',','.'));
      const altura = parseFloat(inputAltura.value.replace(',','.'));
  
      if (!peso || !altura || altura <= 0) {
        resultado.innerHTML = "Por favor, insira valores válidos.";
        return;
      }
  
      const imc = peso / (altura * altura);

      console.log(imc)


      if (imc < 18.5) {
        resultado.innerHTML = "Abaixo do peso";
      } else if (imc >= 18.5 && imc <= 24.9) {
        resultado.innerHTML = "Peso normal";
      } else if (imc >= 25 && imc <= 29.9) {
        resultado.innerHTML = "Sobrepeso";
      } else if (imc >= 30 && imc <= 34.9) {
        resultado.innerHTML = "Obesidade grau 1";
      } else if (imc >= 35 && imc <= 39.9) {
        resultado.innerHTML = "Obesidade grau 2";
      } else if (imc >= 40) {
        resultado.innerHTML = "Obesidade grau 3";
      }
    });
  }
  


  imc(); // Chama a função ao carregar o script
  