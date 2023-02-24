function dividir(x, y) {
    try {
      if (y === 0) {
        throw new Error("Divisão por zero não é permitida.");
      }
      return x / y;
    } catch (e) {
      console.log("Erro: " + e.message);
    } finally {
      console.log("A divisão foi executada.");
    }
  }
  
  dividir(20, 2);
//Nesse exemplo, a função dividir recebe dois argumentos x e y. Ela tenta dividir x por y. Se y for igual a zero, a função lança um erro usando a palavra-chave throw. O bloco catch captura o erro e exibe uma mensagem de erro no console. O bloco finally sempre será executado, independentemente de haver ou não um erro, e exibe uma mensagem indicando que a divisão foi executada.

//No final, chamamos a função dividir com 10 e 0, o que deveria lançar um erro de divisão por zero. Portanto, o bloco catch é executado, exibindo a mensagem de erro no console, seguido pelo bloco finally, que exibe uma mensagem indicando que a divisão foi executada.




