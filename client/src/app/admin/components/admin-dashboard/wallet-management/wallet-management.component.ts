import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/admin/admin-service/admin-service.service';

@Component({
  selector: 'app-wallet-management',
  templateUrl: './wallet-management.component.html',
  styleUrls: ['./wallet-management.component.css']
})
export class WalletManagementComponent {

  walletSubscription !:Subscription
  walletDetails :any
  wallet!:Number
  constructor(private adminService:AdminService){}
  

  ngOnInit(): void {
    this.adminService.getWallet().subscribe({
      next:(res:any)=>{
        console.log(res);
        
        this.walletDetails = res.wallet.walletStatements,
        this.wallet = res.wallet.wallet
      }
    })
  }
}
