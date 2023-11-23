class Complexo:
    def __init__(self, real, imaginario):
        self.real = real
        self.imaginario = imaginario

    def adicionar(self, outro):
        novo_real = self.real + outro.real
        novo_imaginario = self.imaginario + outro.imaginario
        return Complexo(novo_real, novo_imaginario)

    def subtrair(self, outro):
        novo_real = self.real - outro.real
        novo_imaginario = self.imaginario - outro.imaginario
        return Complexo(novo_real, novo_imaginario)

    def multiplicar(self, outro):
        novo_real = (self.real * outro.real) - (self.imaginario * outro.imaginario)
        novo_imaginario = (self.real * outro.imaginario) + (self.imaginario * outro.real)
        return Complexo(novo_real, novo_imaginario)

    def imprimir(self):
        print(f"{self.real} + {self.imaginario}i")

num1 = Complexo(2, 3)
num2 = Complexo(1, -1)
num3 = Complexo(4, 2)

soma12 = num1.adicionar(num2)
soma123 = soma12.adicionar(num3)

print("Número 1:")
num1.imprimir()

print("Número 2:")
num2.imprimir()

print("Número 3:")
num3.imprimir()

print("Soma de 1 e 2:")
soma12.imprimir()

print("Soma de 1, 2 e 3:")
soma123.imprimir()
