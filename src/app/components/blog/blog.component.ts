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
      {
        titulo: 'Piláres de la Industria 4.0',
        urlImagen: 'https://www.edsrobotics.com/wp-content/uploads/2020/05/industria-4.0-900x480.jpg',
        cuerpoNoticia: 'Los pilares de la industria 4.0 son los factores que nos permiten evaluar si una organización productiva opera bajo los conceptos de la cuarta revolución industrial.',
        fechaPublicacion: '2020-08-14'
      },
      {
        titulo: '¿Qué es la industria 4.0?',
        urlImagen: 'https://www.atriainnovation.com/wp-content/uploads/2019/10/portada-industria-4.jpg',
        cuerpoNoticia: 'Cuando se habla de Revolución Industrial, nos referimos a cambios drásticos o revolucionarios en los entornos productivos',
        fechaPublicacion: '2023-07-01'
      }
    ]
  }

  cargarNoticias(): string {

    let lista = "";

    this.arrayNoticias.forEach(noticia => {
      //lista += `<li>${noticia.titulo}- ${noticia.urlImagen} - ${noticia.cuerpoNoticia} - ${noticia.fechaPublicacion}</li>`
      lista += `<article class="noticia">
                  <img src="${noticia.urlImagen}" alt="${noticia.titulo}">
                    <h3>${noticia.titulo}</h3>
                    <p>${noticia.cuerpoNoticia}</p>
                    <p>${noticia.fechaPublicacion}</p>
                </article>`
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
