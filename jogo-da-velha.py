import random

def mostrar_tabuleiro(tab):
    print("\n")
    print("   1   2   3")
    print(" +---+---+---")
    print(f"A| {tab[0]} | {tab[1]} | {tab[2]} ")
    print(" +---+---+---")
    print(f"B| {tab[3]} | {tab[4]} | {tab[5]} ")
    print(" +---+---+---")
    print(f"C| {tab[6]} | {tab[7]} | {tab[8]} ")
    print("\n")

def verificar_vitoria(tab, jogador):
    combinacoes = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  # linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  # colunas
        [0, 4, 8], [2, 4, 6]              # diagonais
    ]
    return any(tab[c[0]] == tab[c[1]] == tab[c[2]] == jogador for c in combinacoes)

def coordenada_para_indice(coord):
    coord = coord.strip().upper()
    if len(coord) != 2:
        return None
    
    linha = coord[0]
    coluna = coord[1]

    if linha not in "ABC" or coluna not in "123":
        return None

    linha_idx = "ABC".index(linha)
    coluna_idx = int(coluna) - 1

    return linha_idx * 3 + coluna_idx

def jogada_cpu(tab):
    livres = [i for i, v in enumerate(tab) if v == " "]
    return random.choice(livres)

def jogo_da_velha():
    # Escolher número de jogadores
    while True:
        modo = input("Digite 1 para jogar contra a CPU ou 2 para dois jogadores: ")
        if modo in ["1", "2"]:
            modo = int(modo)
            break
        print("Entrada inválida! Digite apenas 1 ou 2.")

    tabuleiro = [" "] * 9
    jogador_atual = "X"

    for rodada in range(9):
        mostrar_tabuleiro(tabuleiro)

        # Jogada do jogador humano
        if modo == 2 or (modo == 1 and jogador_atual == "X"):
            while True:
                jogada = input(f"Jogador {jogador_atual}, escolha uma posição (A1, B3...): ")
                pos = coordenada_para_indice(jogada)

                if pos is None:
                    print("Coordenada inválida! Use o formato A1, B2, C3...")
                    continue

                if tabuleiro[pos] != " ":
                    print("Posição já ocupada! Escolha outra.")
                    continue
                break

        else:
            # Jogada da CPU
            print("CPU pensando...")
            pos = jogada_cpu(tabuleiro)

        tabuleiro[pos] = jogador_atual

        # Verificar vitória
        if verificar_vitoria(tabuleiro, jogador_atual):
            mostrar_tabuleiro(tabuleiro)
            print(f"🎉 Jogador {jogador_atual} venceu!")
            return

        # Alternar jogador
        jogador_atual = "O" if jogador_atual == "X" else "X"

    mostrar_tabuleiro(tabuleiro)
    print("😐 Empate!")

# Iniciar o jogo
jogo_da_velha()
