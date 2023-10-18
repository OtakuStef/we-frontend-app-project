export interface GameItem {
  name:string,
  platforms:Platforms[],
  releaseDate:string,
  background_image:string,
  metacritic:number,
  rawgId:number,
  genres:Genre[]
}

export interface GameAPIResponse {
  count : number,
  next : string,
  previous : string,
  results : GameItem[]
}

export interface Platforms{
  platform : Platform
}

export interface Platform {
  id : number,
  name : string
}

export interface Genre {
  id : number,
  name : string
}