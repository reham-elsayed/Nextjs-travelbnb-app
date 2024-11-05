import { ExploreData, LiveData } from "_/types/app";

export const getExplore =async()=>{
    try{
        const res= await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/4G1G`)
        const exploreData:ExploreData = await res.json();
       return exploreData;
    } catch (err){
        throw err;
    }
}

export const getLiveData =async()=>{
    try{
        const res= await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/VHHT`)
        const liveData:LiveData = await res.json();
       return liveData;
    } catch (err){
        throw err;
    }
}

export const getsearchResult = async(params: Record<string, string>)=>{
    const queryString = new URLSearchParams(params).toString();

    try{

        const res= await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/5NPS?${queryString}`)
        const searchResultData= await res.json();
       return searchResultData;
    } catch (err){
        throw err;
    }
}