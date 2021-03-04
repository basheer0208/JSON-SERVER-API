export class entities
{
  id:string;
  fname:string;
  lname:string;
  email:string;
  pno:string;
  address: string;

  constructor(id,fname,lname,email,pno,address){
    this.id=id;
    this.fname=fname;
    this.lname=lname;
    this.email=email;
    this.pno=pno;
    this.address=address;
    }
}
