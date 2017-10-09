# Cifrado César
Pseudocódigo:

Salta un prompt:"Ingresa la frase a decodificar" 

- Detectar si la frase ingresada lleva números 
- Detectar si la frase ingresada es un campo vacío


 
- De no ser ninguno de los anteriores, siguen los siguientes pasos:

Function Decipher .-
1. Recorre cada letra de la frase y la devuelve convertida a su número ASCII (método: " ".charCodeAt(indice))

2. A cada número obtenido se le resta 65 para averiguar su posición original
en el alfabeto 

3. Luego se le suma el parámetro de espacios establecidos (en este caso: 33)

4. Al resultado se le aplica el módulo de 26 (número de letras en el alfabeto)

5. Al residuo obtenido se le aumenta 65 para tener el nuevo número según el código ASCII

Función cipher.-

A este código ASCII obtenido le aplicaremos el método: String.fromCharCode()
y obtendremos la nueva letra cifrada.
