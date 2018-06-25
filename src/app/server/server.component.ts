import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
	allowNewServer = false;
	serverName="MyServer";
	num1:number=6;
	num2:number=4;
	numadd=0;
	numsub=0;
	nummul=0;
	numdiv=0;
	numfact1=0;
	numfact2=0;

  constructor() {
        setTimeout(()=>{
       	this.allowNewServer=true;
         },2000); 
  }


  ngOnInit() {
  }
	
	add()
	{
		this.numadd=this.num1+this.num2;
		return this.numadd;
	}

	sub()
	{
		this.numsub=this.num1-this.num2;
		return this.numsub;
	}

	mul()
	{
		this.nummul=this.num1*this.num2;
		return this.nummul;
	}

	div()
	{
		this.numdiv=this.num1/this.num2;
		return this.numdiv;
	}

	fact(x:number)
	{
		let i=2;
		let r=1;
		let y=this.num1;
		if(x==2) { y=this.num2; }
		for(i=2;i<=y;i++)
		{
			r=r*i;
		}
		if(x==2)
			this.numfact2=r;
		else
			this.numfact1=r;
		return r;
	}

}
