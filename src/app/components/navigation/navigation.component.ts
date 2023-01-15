import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/popups/delete/delete.component';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  constructor(private apiService: APIService, public dialog: MatDialog) {}

  buttonText = 'Clear Data';
  buttonColor = 'primary';

  handleClearDataClick() {
    const dialogRef = this.dialog.open(DeleteComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.handleStatus();
        this.apiService.deleteAllPostData();
      }
    });
  }

  handleStatus() {
    this.apiService.deleteOperationStatusFlag.subscribe((flag: any) => {
      this.buttonText = flag.text;
      this.buttonColor = flag.color;
    });
  }
}
