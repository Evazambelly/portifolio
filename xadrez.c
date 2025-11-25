#include <stdio.h>

int main() {
    // Movimento da Torre: 5 casas para a direita
    int i;
    printf("Movimento da Torre:\n");
    for (i = 1; i <= 5; i++) {
        printf("Direita\n");
    }

    // Movimento do Bispo: 3 casas na diagonal (Cima + Direita)
    int j = 1;
    printf("\nMovimento do Bispo:\n");
    while (j <= 3) {
        printf("Cima Direita\n");
        j++;
    }

    // Movimento da Rainha: 4 casas para a esquerda
    int k = 1;
    printf("\nMovimento da Rainha:\n");
    do {
        printf("Esquerda\n");
        k++;
    } while (k <= 4);

    return 0;
}
