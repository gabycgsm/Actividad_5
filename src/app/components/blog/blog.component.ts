import { Component } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  arrayNoticias: Noticia[] = [];

  constructor(){
    this.arrayNoticias = [
      { titulo: 'noticia 1', urlImagen: '', cuerpoNoticia: 'cuerpo de la noticia 1', fechaPublicacion: '31/12/2022'},
      { titulo: 'noticia 2', urlImagen: '', cuerpoNoticia: 'cuerpo de la noticia 2', fechaPublicacion: '05/06/2023'}
    ]
  }

  cargarNoticias(): string{
    return `<li>${this.arrayNoticias[0].titulo}</li>`

  }
}
