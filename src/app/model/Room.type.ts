export type Room = {
  beds?: Array<{id:number,number:string,isOccupied:boolean}>,
  bedsNumber: number,
  hasBalcony :   boolean,
  hasBin:boolean,
  hasLocker : boolean,
  hasPrivateShowerroom :boolean,
  hasTable:boolean,
  hasWardrobe:boolean,
  hasWashtub:boolean,
  id:boolean
  isPrivate:boolean,
  name:string,
}
