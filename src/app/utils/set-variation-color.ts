export default function setVariationColor(pct : any){
    let variation = parseFloat(pct)
    if(variation > 0){
        return '#3DBC55';
    }
    if(variation == 0){
        return '#F4C20D';
    } 
    if(variation < 0){
        return '#DB3237';
    }
}