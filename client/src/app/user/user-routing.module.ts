import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLandingComponent } from '../user/components/user-landing/user-landing.component';
import { UserLoginComponent } from '../user/components/user-login/user-login.component';
import { UserSignupComponent } from '../user/components/user-signup/user-signup.component';
import { UserVerifyOtpComponent } from '../user/components/user-verify-otp/user-verify-otp.component';
import {UserAuthGuard} from './service/userAuth-gaurd/user-auth-guard.service'
import { BookTurfComponent } from './components/user-landing/turf-lists/book-turf/book-turf.component';
import { UserHomeComponent } from './components/user-landing/turf-lists/user-home.component';
import { HomeComponent } from './components/user-landing/home/home.component';
import { UserProfileComponent } from './components/user-landing/user-profile/user-profile.component';
import { ProfileComponent } from '../shared/generics-components/profile/profile.component';
import { UserOrdersComponent } from './components/user-landing/user-profile/user-bookings/user-orders.component';
import { UserDetailComponent } from './components/user-landing/user-profile/user-detail/user-detail.component';
import { PaymentSuccessComponent } from './components/user-landing/turf-lists/book-turf/payment-success/payment-success.component';
import { PaymentFailedComponent } from './components/user-landing/turf-lists/book-turf/payment-failed/payment-failed.component';
import { BookingDetailsComponent } from './components/user-landing/user-profile/user-bookings/booking-details/booking-details.component';
import { ChangeSlotsComponent } from './components/user-landing/user-profile/user-bookings/booking-details/change-slots/change-slots.component';
import { WalletComponent } from './components/user-landing/user-profile/wallet/wallet.component';

const routes: Routes = [
  {path:'',component:UserLandingComponent, children:[
    {path:'login',component:UserLoginComponent,},
    {path:'signup',component:UserSignupComponent},
    {path:'verify',component:UserVerifyOtpComponent},
    {path:'',component:HomeComponent,canActivate:[UserAuthGuard]},
    {path:'turf-list',component:UserHomeComponent,canActivate:[UserAuthGuard]},
    {path:'book-turf/:turfId',component:BookTurfComponent,canActivate:[UserAuthGuard]},
    {path:'booking-success',component:PaymentSuccessComponent,canActivate:[UserAuthGuard]},
    {path:'booking-failed',component:PaymentFailedComponent,canActivate:[UserAuthGuard]},
    {path:'booking-details/:bookingId',component:BookingDetailsComponent,canActivate:[UserAuthGuard]},
    {path:'change-slots/:bookingId',component:ChangeSlotsComponent,canActivate:[UserAuthGuard]}, 
    {path:'user-profile',component:UserProfileComponent,canActivate:[UserAuthGuard], 
      children:[
        {path:'bookings',component:UserOrdersComponent},
        {path:'user-details',component:UserDetailComponent},
        {path:'wallet',component:WalletComponent}
      ]
      }, 
    // {path:'**',redirectTo:'',pathMatch:'full'},
    ],
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
