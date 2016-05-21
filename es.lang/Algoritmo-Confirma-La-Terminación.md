# Algoritmo Confirma la Terminación

![](https://i.imgur.com/Z7vhddH.jpg)

### Explicación:

La función es simplemente una operación booleana. Es necesario que se devuelva true si el primer argumento termina con el segundo argumento. Esto significa que para problema de ejemplo `confirmEnding('Bastian', 'n');`, debe devolver true.

## Pista: 1

Hecha un vistazo a como `substr()` funciona. Deberás intentar obtener los últimos X caracteres.

## Pista: 2

Para obtener los últimos X caracteres deberás utilizar length() y convertirlo en número negativo.

## Pista: 3

Comprueba que tienes la sintaxis de forma apropiada y que estés utilizando `===` para comparar.

## ¡Alerta de Spoiler!

[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**¡Solución abajo!**

## Solución del código:

```javascript
function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
}
```

:rocket: [Ejecutar código](https://repl.it/CLjU/18)

## Explicación del código:

Utilizamos subtring() con el valor negativo que nos devuelve la longitud de target. Podríamos utilizar -1 para obtener el último carácter pero si la longitud de target es en realidad mayor que uno entonces la función devolvería la información incorrecta. Luego retornamos el valor de su expresión boolanea.

## Créditos:

Si encuentras útil este artículo puedes dar las gracias copiando y pegando este mensaje en el chat principal: **`Thanks @Rafase282 for your help with Algorithm: Confirm the Ending`**

> **NOTA:** Por favor añade tu nombre de usuario solamente si has añadido **contenido relevante** al artículo. (Por favor no remuevas ningún nombre existente.)
