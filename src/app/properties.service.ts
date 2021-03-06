import { Injectable } from '@angular/core';
import { Properties } from './model/properties';

@Injectable({
  providedIn: 'root',
})
export class PropertiesService {

  properties: Properties[] = [];

  constructor() {
    this.properties = [
      {
        "id": 1,
        "property": "Piso en avenida Avenida Arrigo Boito, Limonar, Málaga",
        "price": 525000,
        "image": "./assets/properties/01.png",
        "bedrooms": 4,
        "sqm": 138,
        "description": "El conjunto residencial de Limonar Homes, ubicado en la prestigiosa urbanización Colinas del Limonar, en un entorno especialmente cuidado y perfectamente comunicado con el resto de la ciudad, dispone de un total de 154 viviendas de 2, 3 y 4 dormitorios distribuidas en 14 bloques de baja altura, cuyo diseño, moderno, atractivo y cuidado al detalle, se mimetiza con la naturaleza de su bello entorno generando un clima de relax y tranquilidad.",
        "contactPhone": "914 870 863"
      },
      {
        "id": 2,
        "property": "Chalet en Pinares de San Antón",
        "price": 1590000,
        "image": "./assets/properties/02.png",
        "bedrooms": 5,
        "sqm": 833,
        "description": "Chalet independiente, con impresionantes vistas panorámicas a la bahía de Málaga. Esta villa destaca por su exclusiva ubicación en Pinares de San Antón, junto a un parque natural que aporta una agradable sensación de bienestar y diferentes escenarios y paisajes durante todo el año. ",
        "contactPhone": "952 949 042"
      },
      {
        "id": 3,
        "property": "Piso en venta en Huerta Nueva - Jardín de Málaga",
        "price": 135000,
        "image": "./assets/properties/03.png",
        "bedrooms": 4,
        "sqm": 90,
        "description":"En Ciudad Jardín amplio piso distribuido en 4 dormitorios, cocina independiente, lavadero, baño completo terraza acristalada y un espacioso salón con vistas despejadas. Situado en el planta número 7 en un edificio de 11 plantas. Luminoso y recién reformado.",
        "contactPhone": "952 947 246"
      },
      {
        "id": 4,
        "property": "Piso en venta en calle Antonio María Isola",
        "price": 26500,
        "image": "./assets/properties/04.png",
        "bedrooms": 3,
        "sqm": 51,
        "description": "Piso de tres dormitorios y un cuarto de baño. Se encuentra en la primera planta de un edificio de cinco alturas sobre rasante, el cual no dispone de ascensor. Se distribuye en tres dormitorios, un cuarto de baño, salón-comedor y cocina. Vivienda a reformar, las paredes necesitan pintura. Situada en un entorno de calles amplias y con árboles. Con comercios cercanos y ambiente dinámico.",
        "contactPhone": "952 142 592"
      },
      {
        "id": 5,
        "property": "Dúplex en venta en calle Comedias, 8",
        "price": 548000,
        "image": "./assets/properties/05.png",
        "bedrooms": 2,
        "sqm": 108,
        "description":"Rehabilitación integral de edificio de principios del siglo XX, en el que se han respetado todos sus elementos arquitectónicos valiosos, manteniendo el valor histórico de su fachada original y su diseño señorial.Seis viviendas y áticos dúplex de dos dormitorios en pleno corazón del centro histórico de Málaga capital, rodeado de toda la vida cultural y de ocio de la capital.",
        "contactPhone": "951 985 129"
      },
      {
        "id": 6,
        "property": "Chalet en Cerrado de Calderón - Hacienda Paredes",
        "price": 3900000,
        "image": "./assets/properties/06.png",
        "bedrooms": 8,
        "sqm": 605,
        "description":"Lujosa vivienda con vistas panorámicas despejadas a la ciudad, a la bahía de Málaga y a todas sus montañas de alrededores. Situada a 15 minutos del centro y de las playas de Málaga. La casa está dividida en 3 plantas, todas ellas acondicionadas con excelentes calidades, grandes ventanales con vistas panorámicas al mar y a la montaña.",
        "contactPhone": "952 949 042"
      }
    ]
  }

   public getInmuebles(): Properties[] {
     return this.properties;
   }

   getProperty(id: number): Properties {
    const property = this.properties.filter(t => t.id === id)[0];
    const newTask = Object.assign({}, property);
    return newTask;
   }

   getInmueblesBaratos() {
    return this.properties.filter(u => u.price <= 150000);
  }

   getInmueblesDeLujo() {
    return this.properties.filter(u => u.price >= 300000);
  }

 
}
