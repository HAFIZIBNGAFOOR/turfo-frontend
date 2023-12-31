import { Component } from '@angular/core';
import { AdminService } from '../../../admin-service/admin-service.service';
import { ColumnType, Users } from '../../../../shared/models/shared-model';
import {MatTableDataSource} from "@angular/material/table";
import { UsersType } from '../../../admin-state/admin.interface';


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent {
  userData = new MatTableDataSource<Users>();
  initialized:boolean = false;
  userToBU:any ;
  columnData:ColumnType={
    columns:[
      {title:'Name',dataProperty:'userName',sortable:false,filterable:false},
      {title:'Email',dataProperty:'email',sortable:false,filterable:false},
      {title:'Phone',dataProperty:'phone',sortable:false,filterable:false},
      {title:'Status',dataProperty:'isBlocked',sortable:false,filterable:false},
      {title:'Action',dataProperty:'actions',sortable:false,filterable:false},
    ],
    rowActions:[
      {label:"Action", dataProperty:"isBlocked",actionIdtoReturn:''},
    ],
    rowsPerPage:'3'
  };
  err:any

  constructor(private adminService:AdminService){}

  ngOnInit(): void {
    this.adminService.getUsersList().subscribe(
      {
        next:(res:any)=>{
          const usertype = res.users.map((user:any)=>({
            userName:user.userName,
            email:user.email,
            phone:user.phone,
            turfID:user._id,
            isBlocked:user.isBlocked?'Blocked':'Active',
            actions:user.isBlocked ? 'Unblock' :'Block',
            color:user.isBlocked?'green':'red'
          }))
          this.userData = usertype
        },
        error:(err:any)=> this.err = err
      }
    )
    this.initialized = true
  }
  getAction(user:any){
    console.log(user);
    
    this.adminService.blockOrUnblockUser(user).subscribe(
      { 
        next:(res:any)=>{
          const usertype:any = res.users.map((user:any)=>({
            userName:user.userName,
            email:user.email,
            phone:user.phone,
            turfID:user._id,
            isBlocked:user.isBlocked ?'Blocked':'Active',
            actions:user.isBlocked ?'Unblock' :'Block',
            color:user.isBlocked?'green':'red'
          }))
          this.userData = usertype
        },
        error:(err)=>this.err= err
      }
    )
  }

}
