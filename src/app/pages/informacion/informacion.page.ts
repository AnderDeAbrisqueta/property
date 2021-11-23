import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Properties } from 'src/app/model/properties';
import { PropertiesService } from 'src/app/properties.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage implements OnInit {
  property: Properties = {
    id: 0,
    property: '',
    price: 0,
    image: '',
    bedrooms: 0,
    sqm: 0,
    description: '',
    contactPhone: '',
  };

  constructor(
    private propertiesService: PropertiesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id != null) {
      this.property = this.propertiesService.getProperty(+id);
    }
  }

}
