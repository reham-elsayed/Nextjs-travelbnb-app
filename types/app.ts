export type Exploreitem = {
    img:string;
    location:string;
    distance: string
}
export type ExploreData = Exploreitem[]


export type liveitem = {
    img:string;
   title:string;
}
export type LiveData = liveitem[]


export interface placeholderProps{
    placeholder?:string
  }

export type listingCard ={
    img: string;
    location: string;    
    title: string;
    description: string;
    star:number;
    price:string;
    total:string;
    long: number;
    lat:number;
}
export type SearchResultData = listingCard[]
