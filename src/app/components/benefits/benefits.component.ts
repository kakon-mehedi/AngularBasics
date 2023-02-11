import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css'],
})
export class BenefitsComponent {
  constructor(private dataService: DataService) {}
  @Input() currentFeature: any;

  benefitsArr: any[] = [];

  ngOnChanges() {
    this.benefitsArr = this.dataService.benefits.filter(
      (benefit) => benefit.featureId == this.currentFeature.id
    );
  }
}
