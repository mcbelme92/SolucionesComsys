export interface Post {
  userId: number;
  id: number;
  title: string;
  body?: string;
}

// Definir la interface para el tipo de retorno de la función API
//se maneja asi pro que puede llegar informacion pero sino llega puede enviar un error com oundefined
export interface getPost {
  data?: Post[];
}
