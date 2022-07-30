import { AccessLevel } from "./accessLevel";

export class Note{
  public id : string = "";
  public title : string = "";
  public description : string = "";
  public style : number = 0;
  public accessLevel : AccessLevel = AccessLevel.view;
}
