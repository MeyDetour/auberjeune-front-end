export type Bed = {
  id:number,
  isOccupied:boolean,
  number :string,
  isSittingApart?: boolean,
  state: string,
  cleanedBy: null,
  inspectedBy: null,
  isDoubleBed: boolean,
  bedShape: string,
  hasLamp: boolean,
  hasLittleStorage: boolean,
  hasShelf: boolean,
  currentBooking: null
}
