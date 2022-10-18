import operator

class Persona: 
    def __init__(self, nombre, apellido, n_alumno): 
        self.nombre = nombre 
        self.apellido = apellido 
        self.n_alumno = n_alumno 
        self.notas = [] 
        self.promedio = {}

    def agregar_nota(self, n): 
        self.notas.append(n) 

    def agregar_notas(self, l): 
        self.notas.extend(l) 

    def get_promedio(self): 
        return sum(self.notas) / len(self.notas)  

    def borrar_notas(self): 
        #del(self.notas) 
        self.notas = [] 

    def ordenar_notas(self, lista_est): 
        for est in lista_est:
            self.promedio[est.apellido] = est.get_promedio()

        self.promedio = sorted(self.promedio.items(), key = operator.itemgetter(1), reverse=True)

        for nota in enumerate(self.promedio):
            print(f"{nota[1][0]} - Promedio --> {nota[1][1]}\n ")

    def mostrar_notas(self): 
        return self.notas 

julio = Persona("Julio", "Proaño", 1) 
andres = Persona("Andres", "Guerra", 2) 
diego = Persona("Diego", "Peña", 3) 

julio.agregar_notas([5, 4, 5, 1]) 
andres.agregar_notas([5, 7, 8, 1]) 
diego.agregar_notas([3, 3, 2, 1]) 

estudiantes = [julio, andres, diego] 

for estudiante in estudiantes: 
    print(f"{estudiante.apellido} --> Promedio = {estudiante.get_promedio()}\n ") 
    #'% 0.2f'% 

julio.ordenar_notas(estudiantes)

julio.borrar_notas() 
print(julio.mostrar_notas()) 