import { Employee } from "./employee";

export class Team {
  constructor(
    public id:number,
    public name:string,
    public leaderId:number,
    public members:Employee[]|null,

  ) {

  }
}
