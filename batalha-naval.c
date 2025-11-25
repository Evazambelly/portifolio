#include <stdio.h>

#define TAMANHO_TABULEIRO 10
#define TAMANHO_NAVIO 3

int main() {
    // 1. Tabuleiro 10x10 inicializado com água (valor 0)
    int tabuleiro[TAMANHO_TABULEIRO][TAMANHO_TABULEIRO] = {0};

    // 2. Navios representados por vetores
    int navioHorizontal[TAMANHO_NAVIO] = {3, 3, 3}; // 3 representa parte do navio
    int navioVertical[TAMANHO_NAVIO] = {3, 3, 3};

    // 3. Coordenadas iniciais para os navios
    int linhaH = 2, colunaH = 4; // Início do navio horizontal
    int linhaV = 5, colunaV = 7; // Início do navio vertical

    // 4. Validação simplificada (manual, pois as coordenadas estão no código)
    // Garantir que os navios não ultrapassem os limites
    // (para navio horizontal, a coluna final deve ser <= 9)
    // (para navio vertical, a linha final deve ser <= 9)

    // 5. Posicionar navio horizontal no tabuleiro
    for (int i = 0; i < TAMANHO_NAVIO; i++) {
        tabuleiro[linhaH][colunaH + i] = navioHorizontal[i];
    }

    // 6. Posicionar navio vertical no tabuleiro
    for (int i = 0; i < TAMANHO_NAVIO; i++) {
        tabuleiro[linhaV + i][colunaV] = navioVertical[i];
    }

    // 7. Exibir o tabuleiro no console
    printf("Tabuleiro Batalha Naval:\n\n");

    for (int i = 0; i < TAMANHO_TABULEIRO; i++) {
        for (int j = 0; j < TAMANHO_TABULEIRO; j++) {
            printf("%d ", tabuleiro[i][j]);
        }
        printf("\n"); // Nova linha a cada linha do tabuleiro
    }

    return 0;
}
