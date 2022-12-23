# Hooks

Incorporacion que permite **enganchar** el estado y ciclo de vida por medio de funcion. (Antes en componentes en clases).

Mucho mejor que class components debido a que se toma base JS y computadoras no necesitan compilar clases a funcion prototipo de JS. 
- Mejor para leer

## Tipos de Hooks

- Basicos:
    - useState: Maneja el estado
    - useEffect: Simula el ciclo de vida de un componente
- Avanzados:
    - useContext
    - useRef
    - useReducer
    - useCallback
    - useMemo

### useState

Permite tener estado y logica en componentes funcionales (Antes solo presentacion "tontos").

- Se usa destructuracion del paquete de react
- Usa un valor del estado y metodo para actualizarlo [value, setValue], cada variable del estado tiene una funcion.
- Por cada valor del estado se usa la variable destructurada