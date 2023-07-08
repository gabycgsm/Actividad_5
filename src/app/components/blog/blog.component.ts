import { Component } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  arrayNoticias: Noticia[] = [];
  newNoticia: Noticia = { titulo: '', urlImagen: '', cuerpoNoticia: '', fechaPublicacion: '' };

  constructor() {
    this.arrayNoticias = [
      { titulo: 'noticia 1', urlImagen: './assets/images/imagen_1.jpg', cuerpoNoticia: 'cuerpo de la noticia 1', fechaPublicacion: '2022-06-25' },
      { titulo: 'noticia 2', urlImagen: './assets/images/imagen_2.jpg', cuerpoNoticia: 'cuerpo de la noticia 2', fechaPublicacion: '2023-07-01' }
    ]
  }

  cargarNoticias(): string {

    let lista = "";

    this.arrayNoticias.forEach(noticia => {
      lista += `<li>${noticia.titulo}- ${noticia.urlImagen} - ${noticia.cuerpoNoticia} - ${noticia.fechaPublicacion}</li>`
    })

    return lista;

  }

  guardarNoticia(): void {
    if (this.newNoticia.titulo === "" || this.newNoticia.urlImagen === "" || this.newNoticia.cuerpoNoticia === "" || this.newNoticia.fechaPublicacion === "") {
      alert('No se permiten campos vacios')
    } else {
      this.arrayNoticias.push(this.newNoticia);
      this.newNoticia = { titulo: '', urlImagen: '', cuerpoNoticia: '', fechaPublicacion: '' };

    }



  }
}
