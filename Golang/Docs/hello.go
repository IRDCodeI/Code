package main // Permite agrupar funciones y esta formado por todos los archivos del mismo dir

import (
	"fmt"

	"rsc.io/quote"
) // Paquete con funciones para formatear texto (Inlcuye la impresion en consola)

func main() { // Funcion que se ejecuta de forma predeterminada cuando ejecuta el paquete main
	//fmt.Println("Hello, World!")
	fmt.Println(quote.Go())
}
