#include <stdio.h>

int main() {
    // Dados da carta 1
    char estado1;
    char codigo1[4];
    char nomeCidade1[100];
    int populacao1;
    float area1;
    float pib1;
    int pontosTuristicos1;

    // Dados da carta 2
    char estado2;
    char codigo2[4];
    char nomeCidade2[100];
    int populacao2;
    float area2;
    float pib2;
    int pontosTuristicos2;

    // Leitura dos dados da carta 1
    printf("Digite os dados da Carta 1:\n");
    printf("Estado: ");
    scanf(" %c", &estado1);
    printf("Código da Carta: ");
    scanf("%s", codigo1);
    printf("Nome da Cidade: ");
    scanf(" %[^\n]", nomeCidade1);
    printf("População: ");
    scanf("%d", &populacao1);
    printf("Área (km²): ");
    scanf("%f", &area1);
    printf("PIB (em bilhões): ");
    scanf("%f", &pib1);
    printf("Número de Pontos Turísticos: ");
    scanf("%d", &pontosTuristicos1);

    // Leitura dos dados da carta 2
    printf("\nDigite os dados da Carta 2:\n");
    printf("Estado: ");
    scanf(" %c", &estado2);
    printf("Código da Carta: ");
    scanf("%s", codigo2);
    printf("Nome da Cidade: ");
    scanf(" %[^\n]", nomeCidade2);
    printf("População: ");
    scanf("%d", &populacao2);
    printf("Área (km²): ");
    scanf("%f", &area2);
    printf("PIB (em bilhões): ");
    scanf("%f", &pib2);
    printf("Número de Pontos Turísticos: ");
    scanf("%d", &pontosTuristicos2);

    // Cálculos
    float densidade1 = populacao1 / area1;
    float densidade2 = populacao2 / area2;
    float pibPerCapita1 = pib1 * 1000000000 / populacao1;  // convertendo bilhões p/ reais
    float pibPerCapita2 = pib2 * 1000000000 / populacao2;

    // Exibição dos cálculos
    printf("\nCarta 1 - %s:\n", nomeCidade1);
    printf("Densidade Populacional: %.2f hab/km²\n", densidade1);
    printf("PIB per capita: R$ %.2f\n", pibPerCapita1);

    printf("\nCarta 2 - %s:\n", nomeCidade2);
    printf("Densidade Populacional: %.2f hab/km²\n", densidade2);
    printf("PIB per capita: R$ %.2f\n", pibPerCapita2);

    // Comparação (escolhido: PIB per capita)
    printf("\nComparação de cartas (Atributo: PIB per capita):\n");

    if (pibPerCapita1 > pibPerCapita2) {
        printf("Carta 1 - %s venceu! (R$ %.2f vs R$ %.2f)\n", nomeCidade1, pibPerCapita1, pibPerCapita2);
    } else if (pibPerCapita2 > pibPerCapita1) {
        printf("Carta 2 - %s venceu! (R$ %.2f vs R$ %.2f)\n", nomeCidade2, pibPerCapita2, pibPerCapita1);
    } else {
        printf("Empate! Ambas as cartas têm o mesmo PIB per capita.\n");
    }

    return 0;
}
