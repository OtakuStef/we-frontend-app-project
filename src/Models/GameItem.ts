export interface GameItem {
  name:string,
  platforms:string[],
  releaseDate:string,
  background_image:string,
  metacritic:number,
  rawgId:number,
  genres:string[]
}

export interface GameAPIResponse {
  count : number,
  nextPage : string,
  previousPage : string,
  results : GameItem[]
}