import { Component, ViewChild } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { User } from '../../services/user';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModalViewUserComponent } from './modal-view-user/modal-view-user.component';
import { ModalFormUserComponent } from './modal-form-user/modal-form-user.component';

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrl: './user-crud.component.scss'
})
export class UserCrudComponent {

  displayedColumns: string[] = ['id', 'name', 'email', 'role', 'benefits', 'actions'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  listUsers: User[] = [];

  constructor(
      private usersService: UsersService,
      public dialog: MatDialog
    ){
    this.dataSource = new MatTableDataSource<any>(this.listUsers);
  }

  ngOnInit(){
    this.getListUsers();
  }

  getListUsers(){
    this.usersService.getAllUsers().subscribe({
      next: (response: any) => {
        console.log('Lista de usuários firebase ', response)
        this.listUsers = response;

        this.dataSource = new MatTableDataSource<any>(this.listUsers);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.paginator._intl.itemsPerPageLabel="itens por página";
      },
      error: error => console.log(error)
    });
  }
  
  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // logica do modal
  openModalViewUser(user: User){
    this.dialog.open(ModalViewUserComponent, {
      width: '700px',
      height: '360px',
      data: user
    })
  }

  openModalAddUser(){
    this.dialog.open(ModalFormUserComponent, {
      width: '700px',
      height: '400px',
    }).afterClosed().subscribe(() => this.getListUsers() )
  }
  
}
