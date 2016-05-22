# Algoritmo ¡Bu!

![](https://i.imgur.com/CgROCEF.jpg)

### Explicación del problema:

- Este programa es muy simple, el truco está en entender que es un boolaneo primitivo. El programa recibir un parámetro verdadero o falso.

## Pista: 1

- Deberás comprobar que el tipo de parámetro recibido sea boolaneo.

## Pista: 2

- Para comprobar el tipo de un parámetro puedes utilizar `typeof`

## Pista: 3

- Debido a que a que debes retornar true o false puedes utilizar una declaración if o simplemente retornar la sentencia que usarías en la declaración if.

## ¡Alerta de Spoiler!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**¡Solución abajo!**

## Solución del código:

```javascript
function booWho(bool) {
  return typeof bool === 'boolean';
}

// realizamos el test
booWho(null);
```

:rocket: [¡En REPL!](https://repl.it/CLnK/0)

# Explicación del código:

Utilizamos el operador `typeof` para comprobar si una variable es boolanea. Si lo es retornará `true`. En caso contrario, al ser otro tipo retornará `falso`.

# Créditos:

Si encuentras útil este artículo puedes dar las gracias copiando y pegando este mensaje en el chat principal: **`thanks @Rafase282 for your help with Algorithm: Boo-who`**

> **NOTA:** Por favor añade tu nombre de usuario solamente si has añadido **contenido relevante** al artículo. (Por favor no remuevas ningún nombre existente.)
