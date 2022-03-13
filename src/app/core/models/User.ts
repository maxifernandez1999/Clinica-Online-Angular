export class User{
    public id:string;
    public name:string;
    public lastName:string;
    public age:number;
    public dni:number;
    public email:string;
    public password:string;
    public file:string|File;
    public type:string = 'patient';

}