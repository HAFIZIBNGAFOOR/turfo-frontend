// export interface TurfAdmin{
//     userName:string,
//     email:string,
//     phone:string,
//     password:string
// }

import { TurfAdminState } from "../models/turf-admin.model";

// export interface TurfAdminState  {
//    turfadmin:TurfAdmin | null,
//    isLoggedIn:boolean,
//    error:string,
//    success:string
// }
export const turfAdminState:TurfAdminState={
    turfadmin:null,
    isLoggedIn:false,
    error:'',
    success:''
}