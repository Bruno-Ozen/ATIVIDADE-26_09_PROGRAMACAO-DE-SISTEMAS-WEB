function selectionSort(lista_numeros = []) {
  console.log("Algoritmo: Selection Sort\n");
  console.log("Original:\n");
  console.log(`[${lista_numeros.join(", ")}]\n`);

  let qtd_comparacoes = 0;
  let qtd_trocas = 0;

  let indice_do_menor;

  for (let i = 0; i < lista_numeros.length - 1; i++) {
    indice_do_menor = i;

    for (let j = i + 1; j < lista_numeros.length; j++) {
      if (lista_numeros[j] < lista_numeros[indice_do_menor]) {
        indice_do_menor = j;
        qtd_comparacoes++;
      }
    }

    [lista_numeros[i], lista_numeros[indice_do_menor]] = [
      lista_numeros[indice_do_menor],
      lista_numeros[i],
    ];
    qtd_trocas++;

  }

  console.log("Ordenado:\n");
  console.log(`[${lista_numeros.join(", ")}]\n`);

  console.log(`Comparações: ${qtd_comparacoes}\n`);
  console.log(`Trocas: ${qtd_trocas}`);
}

selectionSort([8, 3, 5, 1, 9, 6, 2, 7, 4]);
