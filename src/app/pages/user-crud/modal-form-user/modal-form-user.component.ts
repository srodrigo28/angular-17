import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-form-user',
  templateUrl: './modal-form-user.component.html',
  styleUrl: './modal-form-user.component.scss'
})
export class ModalFormUserComponent {

  formUser: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ModalFormUserComponent>,
    private formBuilder: FormBuilder){}

    ngOnInit() {
      this.buildFormUser()
    }

    buildFormUser(){ 
        this.formBuilder.group({
        name: [null, [Validators.required, Validators.minLength(3)]],
        email: [null, [Validators.required, Validators.minLength(10)]],
        sector: [null, [Validators.required, Validators.minLength(5)]],
        role: [null, [Validators.required, Validators.minLength(3)]],
        helthPlan:[''],
        dentalPlan:['']
      })
    }
    closeModal(){ this.dialogRef.close() }

}
