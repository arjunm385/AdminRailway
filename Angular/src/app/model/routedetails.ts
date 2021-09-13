import { traindetails } from "./traindetails";

export class routedetails{
    routeid:number=0;
	startpoint:string='';
	// endpoint:string='';
	date:any='';
	arrival:any='';
	depart:any='';
	gap:any=''; //transient
	interval:any=''; //transient
	distance:number=0;
	station:number=0;
	td:traindetails=new traindetails;
}