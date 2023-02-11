import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HeroVideoComponent } from 'src/app/popups/hero-video/hero-video.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(HeroVideoComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
