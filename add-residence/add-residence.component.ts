import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ResidenceService } from '../core/services/residence.service';
import { Residence } from '../core/models/residence.model';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
  
  constructor(private rs:ResidenceService){}
  addResidence = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    address: new FormControl(''),
    image: new FormControl(''),
    status: new FormControl(''),
  });


  getId(){
    return this.addResidence.get('id')
  }
}
