import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../usuario.service';


@Component({
  selector: 'app-inisiar-sesion',
  templateUrl: './inisiar-sesion.component.html',
  styleUrls: ['./inisiar-sesion.component.css']
})
export class InisiarSesionComponent implements OnInit {
	formulario:any;


  constructor(private servicioUsuarios:UsuarioService) {
  this.formulario={
  	auth:{
  		email: "",
  	password: ""
  		}
  	
  	}
   }

  ngOnInit() {
  }

  iniciarSesion(){
  	console.log(this.formulario);
  }

}
