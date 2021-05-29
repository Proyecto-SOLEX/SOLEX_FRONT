import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { alojamientosDatos, AlojamientosService } from 'src/app/services/alojamientos.service';
import { localizacionesDatos } from 'src/app/services/localizaciones.service';

@Component({
  selector: 'app-alojamientos',
  templateUrl: './alojamientos.component.html',
  styleUrls: ['./alojamientos.component.css']
})
export class AlojamientosComponent implements OnInit {

  @Input() alojamiento!:alojamientosDatos;
  @Input() localizaciones!:localizacionesDatos;
  
  NUM_CARACTERES:number;

  constructor(
    private router: Router
  ) { 
    this.NUM_CARACTERES = 120;
  }

  ngOnInit() {
    
  }

  public verAlojamiento(){
    this.router.navigate(['/alojamiento', this.alojamiento.id_alojamiento]);
  }

  public puntos_suspensivos():string{
    if(this.alojamiento.descripcion.length > this.NUM_CARACTERES) return "...";
    return "";
  }

}
