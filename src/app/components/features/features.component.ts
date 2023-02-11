import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
})
export class FeaturesComponent {
  constructor(private dataService: DataService) {}

  features = this.dataService.features;
  benefits = this.dataService.benefits;
}
