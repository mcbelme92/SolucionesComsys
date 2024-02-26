# React + TypeScript + Vite

Proyecto Soluciones Comsys

## Home

path: `src/components/Home/Home.tsx`
El componente Home es una página principal de la aplicación que muestra dos funcionalidades principales: contar las publicaciones por usuario y encontrar las publicaciones con los títulos más largos. Este componente utiliza datos obtenidos de una API JSONPlaceholder.

Estructura del Componente:
El componente Home se compone de dos secciones principales:

Publicaciones por Usuario: Muestra el recuento de publicaciones por cada usuario.
Publicaciones con Títulos Más Largos: Muestra las tres publicaciones con los títulos más largos.
Funciones Importadas:
El componente Home importa dos funciones desde ../../utils/postUtils:
Cuenta el número de publicaciones por usuario.

```ts
countPostsByUser(posts: Post[]): { [key: number]: number }:
```

Encuentra las publicaciones con los títulos más largos.

```ts
 findLongestTitles(posts: Post[]): { id: number; title: string }[]
```

Estilo:
El componente Home utiliza estilos de Bootstrap para el diseño y la presentación de la interfaz de usuario.

Notas Adicionales:

El componente Home está diseñado para ser una página principal de la aplicación y proporciona funcionalidades clave para los usuarios.
Se recomienda complementar este componente con más detalles sobre su funcionalidad y su integración con otros componentes de la aplicación.

## PostUtils

Path: `src/utils/postUtils.ts`
Descripción
El módulo postUtils contiene funciones utilitarias para el procesamiento de datos relacionados con publicaciones (Post).

Funciones Exportadas
countPostsByUser(posts: Post[]): { [key: number]: number }
Descripción: Esta función cuenta el número de publicaciones por usuario.
Parámetros:
posts: Un arreglo de objetos de tipo Post, que representa las publicaciones.
Valor de Retorno: Retorna un objeto donde las claves son los IDs de usuario y los valores son el número total de publicaciones realizadas por cada usuario.
findLongestTitles(posts: Post[]): { id: number; title: string }[]
Descripción: Esta función encuentra las publicaciones con los títulos más largos.
Parámetros:
posts: Un arreglo de objetos de tipo Post, que representa las publicaciones.
Valor de Retorno: Retorna un arreglo con las tres publicaciones que tienen los títulos más largos, cada elemento del arreglo es un objeto que contiene el ID de la publicación y su título.
Uso
typescript

```ts

import { Post } from "../interface/post.interface";
import { countPostsByUser, findLongestTitles } from "../utils/postUtils";

// Ejemplo de uso de countPostsByUser
const posts: Post[] = [...]; // Obtener los datos de las publicaciones
const postsByUser = countPostsByUser(posts);
console.log(postsByUser);

// Ejemplo de uso de findLongestTitles
const longestTitles = findLongestTitles(posts);
console.log(longestTitles);
```

Notas Adicionales
Las funciones en este módulo son útiles para realizar operaciones comunes relacionadas con datos de publicaciones.
Se recomienda utilizar estas funciones en componentes de la aplicación donde sea necesario procesar datos de publicaciones.

## ApimanagerPost

Path: `src/api/post.api.ts`

Documentación del API ApiManagerPost

Descripción
El ApiManagerPost es una clase que proporciona métodos para interactuar con la API JSONPlaceholder y obtener datos relacionados con publicaciones.

Métodos
getPostApi()
Descripción: Este método realiza una solicitud GET a la API JSONPlaceholder para obtener datos de las publicaciones.
Parámetros: No recibe ningún parámetro.
Tipo de retorno: Retorna una promesa que resuelve un objeto con la propiedad data, la cual contiene un array de objetos Post o undefined si ocurre un error.
Uso:

```ts
const apiManagerPost = new ApiManagerPost();
apiManagerPost
  .getPostApi()
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });

//o tambien usar

const apiManagerPost = new ApiManagerPost();
const response = await apiManagerPost.getPostApi();
if (response.data !== undefined) {
  setPosts(response.data);
} else {
  console.error("La respuesta del servidor es indefinida.");
}
```

Dependencias
axios: Se utiliza para realizar solicitudes HTTP a la API JSONPlaceholder.
BASE_URL_PATH: Una constante que representa la URL base de la API JSONPlaceholder.
Post: Una interfaz que define la estructura de los datos de las publicaciones.
Notas Adicionales
Este API maneja los errores que puedan ocurrir durante la solicitud y devuelve undefined en caso de error.
Se recomienda utilizar este API para obtener datos de las publicaciones y manejar los resultados y errores según sea necesario en la aplicación.
Esta documentación proporciona una visión general del API ApiManagerPost y cómo se utiliza para interactuar con la API JSONPlaceholder y obtener datos relacionados con las publicaciones. Se puede expandir con más detalles sobre su implementación y su contribución a la aplicación según sea necesario.

## Post Interface

Path: `src/interface/post.interface.ts`

Descripción
La interfaz Post define la estructura de un objeto de publicación en la aplicación. Cada objeto de publicación contiene información sobre una publicación realizada por un usuario en la plataforma.

Propiedades
userId: Un número que representa el ID del usuario que realizó la publicación.
id: Un número que representa el ID único de la publicación.
title: Una cadena de texto que representa el título de la publicación.
body: (Opcional) Una cadena de texto que representa el cuerpo o contenido de la publicación.
Documentación de la Interfaz getPost
Descripción
La interfaz getPost define la estructura de un objeto que representa la respuesta de la solicitud para obtener publicaciones. Este objeto encapsula los datos de las publicaciones devueltas por la API.

Propiedades
data: (Opcional) Un array de objetos Post que representa las publicaciones obtenidas. Si no se obtienen datos, esta propiedad puede ser undefined.
Notas Adicionales
Las interfaces proporcionan una forma de definir la estructura de los datos y garantizar consistencia en la aplicación.
La interfaz getPost se utiliza para encapsular los datos devueltos por la API de obtener publicaciones, lo que permite un manejo más fácil y estructurado de los datos en la aplicación.
Esta documentación proporciona una descripción clara de las interfaces Post y getPost y su propósito en la aplicación. Se puede complementar con ejemplos de uso y detalles adicionales según sea necesario para comprender mejor su implementación y su contribución al proyecto.
