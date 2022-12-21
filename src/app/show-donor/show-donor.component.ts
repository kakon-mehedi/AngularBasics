import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Idonar } from '../model/Idonor';
import { DonorService } from '../services/donor.service';

@Component({
  selector: 'app-show-donor',
  templateUrl: './show-donor.component.html',
  styleUrls: ['./show-donor.component.css'],
})
export class ShowDonorComponent {
  constructor(
    private route: ActivatedRoute,
    private donorService: DonorService
  ) {}

  donor!: Idonar;

  ngOnInit() {
    this.route.params.subscribe((data: Params) => {
      let currentId = data['id'];
      this.donor = this.donorService.findCurrentDonor(+currentId);
    });
  }
}
