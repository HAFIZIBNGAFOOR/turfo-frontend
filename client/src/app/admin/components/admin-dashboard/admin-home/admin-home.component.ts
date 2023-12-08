import { Component, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';
import { AdminService } from 'src/app/admin/admin-service/admin-service.service';


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  // chart:any;
  // pieChart:any;
  monthlyBookings:any;
  chartData:any
  pieChartData:any
  weeklySales :string = '' ;
  monthySales :string = '' ;
  annualSales :string = '' ;
  chartLabels:string[] = [];
  pieLabels:string[] = [];
  pieText:string = 'Sports Type Booked' ;
  chartText:string ='Monthly Revenue' ;
  isInitialized:boolean=false

  constructor(private adminService:AdminService,){}
  ngOnInit(): void {
    this.adminService.getDashboardDetails().subscribe({
      next:(res:any)=>{
        this.isInitialized = true
        this.chartData = res.monthlyBooking.map((booking:any)=>Number(booking.TotalAmount));
        this.chartLabels = res.monthlyBooking.map((booking:any)=>booking.month);
        this.pieChartData = res.sportsTypeCount.map((sports:any)=> Number(sports.count));
        this.pieLabels = res.sportsTypeCount.map((sports:any)=>sports.sports);
        this.weeklySales = res.weeklySales;
        this.monthySales = res.monthlySales;
        this.annualSales = res.annualSales;
      }
    })
  }

  
}
