export interface ICar {
  id: number
  title: string,
  imgUrl: string
  bid: number
  finishTime: number
}

export interface IAuctionsCars {
  auctions: ICar[]
}

export interface ICarFullInfo {
  id:number
  finishTime: number
  bid: number
  imgUrl: string
  mileage: number
  title: string
}

export interface IAuctionCar {
  auction: ICarFullInfo

}

export interface IConfig {
  API_BASEPATH?: string;
  IMAGES_BASEPATH?: string;
  POLLING_INTERVAL?: string;
}
