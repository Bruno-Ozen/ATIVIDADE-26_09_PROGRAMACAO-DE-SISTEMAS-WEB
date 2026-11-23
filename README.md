# ATIVIDADE-26_09_PROGRAMACAO-DE-SISTEMAS-WEB
Atividade do dia 26/09/2026 da disciplina de Programação de Sistemas Web - Engenharia de Software (UEM).

[Clique aqui para ver o enunciado original da atividade](https://github.com/JoaoChoma/sistemas_web_2026/blob/main/atividades/atividade_26_09.md)

## RESPONDENDO O EXERCÍCIO
Após implementar os três algoritmos, execute-os utilizando o mesmo vetor
de entrada e complete a tabela:

| Algoritmo      | Comparações | Trocas/Movimentações |
|----------------|------------:|---------------------:|
| Bubble Sort    |          64 |                   19 |
| Selection Sort |          11 |                    8 |
| Insertion Sort |          36 |                   19 |

------------------------------------------------------------------------

## Questão

Com base na implementação e execução dos três algoritmos, responda:

**Qual foi a principal diferença observada entre as estratégias
utilizadas pelo Bubble Sort, Selection Sort e Insertion Sort para
ordenar os elementos do vetor?**

Explique brevemente com suas próprias palavras.

**Resposta:** O Bubble Sort acaba tendo muitas comparações porque ele age de forma muito bruta ao precisar comparar praticamente cada um com todos os outros. Isso é visível na quantidade de comparações, quando 64 não chega a estar tão longe assim de 81, que seria o tamanho da entrada (9 elementos) elevado ao quadrado. O Selection Sort acaba tendo menos comparações e movimentações no momento ele encontra o menor, e já coloca ele na posição definitiva trocando, daí não precisando mais ficar voltando nessas partes do vetor, uma vez que ali já é a posição definitiva dele. Por fim, o Insertion Sort quase preserva uma ordenação definitiva, porém quando ele encontra um menor ainda, tem que voltar e reajustar a estrutura antiga, trocando várias vezes nesse processo, bem como demandando comparação. Acaba sendo menos pior do que o Bubble Sort.

------------------------------------------------------------------------

## ANOTAÇÕES

- Aprendi algumas coisas sobre a sintaxe do Javascript.
- `const` -> Guarda qualquer tipo, mas não pode ser alterada.
- `let` -> Igual o `const`, com o adicional de poder ser alterada.

## USO DE INTELIGÊNCIA ARTIFICIAL GENERATIVA
A IA foi utilizada para formatar a tabela desse README.md, e me ajudar ensinando a sintaxe da linguagem JavaScript que ainda estava conhecendo.