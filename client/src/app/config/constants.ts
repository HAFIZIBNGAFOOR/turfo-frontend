import {Injectable} from '@angular/core';

@Injectable()
export class Constants{

    public readonly UserAPIEndPoint:string = 'https://turfo.online';
    public readonly AdminAPIEndPoint:string = 'https://turfo.online/admin';
    public readonly TurfOwnerAPIEndPoint:string = 'https://turfo.online/turfAdmin';

}