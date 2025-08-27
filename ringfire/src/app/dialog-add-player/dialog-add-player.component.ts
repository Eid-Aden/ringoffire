import { Component, inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from "@angular/material/dialog";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
/* import { NgClass } from "../../../node_modules/@angular/common/index"; */
import { NgClass } from "@angular/common";

export interface DialogData {
  name: string;
}

@Component({
  selector: "app-dialog-add-player",
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, NgClass],
  templateUrl: "./dialog-add-player.component.html",
  styleUrl: "./dialog-add-player.component.scss",
})
export class DialogAddPlayerComponent {
  readonly dialogRef = inject(MatDialogRef<DialogAddPlayerComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  onNoClick(): void {
    this.dialogRef.close();
  }
}
