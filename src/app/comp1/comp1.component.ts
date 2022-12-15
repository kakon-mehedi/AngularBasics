import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { KakonServiceService } from '../service/kakon-service.service';
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
  providers: [KakonServiceService, DataService],
})
export class Comp1Component {
  constructor(private kakon: DataService, private kakon2: KakonServiceService) {
    console.log(this.kakon.userData());
  }

  datas: any[] = [];
  currentUser: any = {};

  ngOnInit() {
    this.datas = [...this.kakon.userData()];
    this.datas[0].first_name = 'kutta';
  }

  findCurrentUser(id: number) {
    return this.datas.filter((data) => data.id === id);
  }
  handleCreate() {}

  handleEdit(id: number) {
    this.currentUser = this.findCurrentUser(id);
  }

  handleUpdate(id: number) {
    this.currentUser = this.findCurrentUser(id);
  }

  handleDelete(id: number) {
    this.datas = this.datas.filter((data) => data.id !== id);
  }
}
