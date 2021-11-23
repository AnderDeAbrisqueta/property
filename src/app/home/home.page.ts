import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PropertiesService } from '../properties.service';
import { Properties } from '../model/properties';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  arrayFiltrado: Properties[] = this.propertiesService.getInmuebles();
  min: number;
  max: number;

  constructor(
    public propertiesService: PropertiesService,
    private router: Router
  ) {}

  goInformationPage(id?: number) {
    this.router.navigateByUrl(`/informacion${id != undefined ? '/' + id : ''}`);
  }

  getArrayFiltrado(value: string) {
    if (value == 'all') {
      if (this.min == null || this.max == null) {
        this.arrayFiltrado = this.propertiesService.getInmuebles();
      } else {
        this.getSuperficieInmuebles();
      }
    }
    if (value == 'barato') {
      if (this.min == null || this.max == null) {
        this.arrayFiltrado = this.propertiesService.getInmueblesBaratos();
      } else {
        this.getSuperficieInmuebles();
        this.getPropertyPrice('barato');
      }
    }
    if (value == 'lujo') {
      if (this.min == null || this.max == null) {
        this.arrayFiltrado = this.propertiesService.getInmueblesDeLujo();
      } else {
        this.getSuperficieInmuebles();
        this.getPropertyPrice('lujo');
      }
    }
  }

  getSuperficieInmuebles() {
    this.arrayFiltrado = this.propertiesService
      .getInmuebles()
      .filter((u) => u.sqm >= this.min && u.sqm <= this.max);
  }

  getPropertyPrice(price: string) {
    if (price == 'barato') {
      this.arrayFiltrado = this.propertiesService.getInmueblesBaratos();
      this.arrayFiltrado = this.arrayFiltrado.filter(
        (u) => u.sqm >= this.min && u.sqm <= this.max
      );
    }
    if (price == 'lujo') {
      this.arrayFiltrado = this.propertiesService.getInmueblesDeLujo();
      this.arrayFiltrado = this.arrayFiltrado.filter(
        (u) => u.sqm >= this.min && u.sqm <= this.max
      );
    }
  }
}
