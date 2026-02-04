import random

# Desenho da forca em cada erro
FORCAS = [
    """
     -----
     |   |
         |
         |
         |
         |
    =========
    """,
    """
     -----
     |   |
     O   |
         |
         |
         |
    =========
    """,
    """
     -----
     |   |
     O   |
     |   |
         |
         |
    =========
    """,
    """
     -----
     |   |
     O   |
    /|   |
         |
         |
    =========
    """,
    """
     -----
     |   |
     O   |
    /|\\  |
         |
         |
    =========
    """,
    """
     -----
     |   |
     O   |
    /|\\  |
    /    |
         |
    =========
    """,
    """
     -----
     |   |
     O   |
    /|\\  |
    / \\  |
         |
    =========
    """
]

def escolher_palavra(modo):
    if modo == 1:
        palavras = ["python", "computador", "programacao", "algoritmo", "chatgpt"]
        return random.choice(palavras)
    else:
        while True:
            palavra = input("Jogador 1, escolha a palavra secreta: ").strip().lower()
            if palavra.isalpha():
                return palavra
            print("Use apenas letras!")

def mostrar_estado(palavra, letras_certas):
    exibicao = " ".join([letra if letra in letras_certas else "_" for letra in palavra])
    print("\nPalavra: ", exibicao)

def jogo_forca():
    # Escolher modo
    while True:
        modo = input("Digite 1 para jogar contra o computador ou 2 para dois jogadores: ")
        if modo in ["1", "2"]:
            modo = int(modo)
            break
        print("Entrada inválida! Digite 1 ou 2.")

    palavra = escolher_palavra(modo)
    letras_certas = set()
    letras_erradas = set()
    tentativas = 6

    print("\n--- JOGO DA FORCA ---")

    while tentativas > 0:
        print(FORCAS[6 - tentativas])
        mostrar_estado(palavra, letras_certas)
        print(f"Letras erradas: {', '.join(sorted(letras_erradas))}")
        print(f"Tentativas restantes: {tentativas}")

        chute = input("Digite uma letra: ").strip().lower()

        if len(chute) != 1 or not chute.isalpha():
            print("Digite apenas uma letra!")
            continue

        if chute in letras_certas or chute in letras_erradas:
            print("Você já tentou essa letra!")
            continue

        if chute in palavra:
            letras_certas.add(chute)
            print("Boa! A letra está na palavra.")
        else:
            letras_erradas.add(chute)
            tentativas -= 1
            print("Letra errada!")

        # Verificar vitória
        if all(letra in letras_certas for letra in palavra):
            print("\n🎉 PARABÉNS! Você venceu!")
            mostrar_estado(palavra, letras_certas)
            return

    print(FORCAS[-1])
    print("\n💀 Você perdeu!")
    print(f"A palavra era: {palavra}")

# Iniciar o jogo
jogo_forca()
