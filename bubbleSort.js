function bubbleSort(lista_numeros = []) {
  console.log("Algoritmo: Bubble Sort\n");
  console.log("Original:\n");
  console.log(`[${lista_numeros.join(", ")}]\n`);

  let qtd_comparacoes = 0;
  let qtd_trocas = 0;
  
  for (let i = 0; i < lista_numeros.length - 1; i++) {
    for (let j = 0; j < lista_numeros.length - 1; j++) {
      if (lista_numeros[j] > lista_numeros[j + 1]) {
        [lista_numeros[j], lista_numeros[j + 1]] = [
          lista_numeros[j + 1],
          lista_numeros[j],
        ];

        qtd_trocas++;
      }

      qtd_comparacoes++;

    }
    
  }

  console.log("Ordenado:\n");
  console.log(`[${lista_numeros.join(", ")}]\n`);

  console.log(`Comparações: ${qtd_comparacoes}\n`);
  console.log(`Trocas: ${qtd_trocas}`);
}

bubbleSort([8, 3, 5, 1, 9, 6, 2, 7, 4]);