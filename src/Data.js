export const API_KEY='AIzaSyCPO4G4Ktm7-aWxp1s8yfA2gLceGfvgtTE';

export const value_converter=(value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }else{
        return value;
    }
}