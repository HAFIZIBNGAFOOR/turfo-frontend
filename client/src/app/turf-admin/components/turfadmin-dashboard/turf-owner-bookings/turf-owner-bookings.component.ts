import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ColumnType } from 'src/app/shared/models/shared-model';
import { TurfAdminService } from 'src/app/turf-admin/turf-admin-service/turf-admin.service';

@Component({
  selector: 'app-turf-owner-bookings',
  templateUrl: './turf-owner-bookings.component.html',
  styleUrls: ['./turf-owner-bookings.component.css']
})
export class TurfOwnerBookingsComponent {
  turfLists: any
  turfdetailsSubscription!:Subscription;
  isEmpty:boolean = true;
  columnDatas:ColumnType={
    columns:[
      {title:'Turf ',dataProperty:'turfName',sortable:false,filterable:false},
      {title:'Game',dataProperty:'sportsType',sortable:false,filterable:false},
      {title:'Turf Price',dataProperty:'turfPrice',sortable:false,filterable:false},
      {title:'Turf Status',dataProperty:'turfStatus',sortable:false,filterable:false},
      {title:'Action',dataProperty:'action2',sortable:false,filterable:false},

    ],
    rowActions:[
      {label:"View", dataProperty:"_id",actionIdtoReturn:''},
    ],
    rowsPerPage:'3'
  };

  constructor(private turfAdminService:TurfAdminService, private router:Router){}

  ngOnInit(): void {
    this.turfdetailsSubscription = this.turfAdminService.getTurfs().subscribe({
      next:(res)=>{
        console.log(res);
        
        this.turfLists = res.turflists.map((turf:any)=>({
          turfName:turf.turfName,
          sportsType:turf.sportsType,
          turfPrice:turf.turfPrice,
          turfStatus:turf.status,
          action2:'View',
          color:'primary',
          turfID:turf._id
        }))
        this.isEmpty = false
      },
      error:err=>{
       if(err.status ==400){
        this.isEmpty =true
       }
      }
    })
  }
  getTurfId(id:String){
    console.log(id,' this is id ');
    this.router.navigate(['/turf-owner/single-bookings/',id])
  }
}
