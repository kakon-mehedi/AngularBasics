import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog1',
  templateUrl: './dialog1.component.html',
  styleUrls: ['./dialog1.component.css'],
})
export class Dialog1Component {
  constructor(
    public dialogRef: MatDialogRef<Dialog1Component>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  countryName!: string;

  ngOnInit() {
    this.countryName = this.dialogData.countryName;
  }
}
