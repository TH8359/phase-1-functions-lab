let distance
const scuberBlocks = 42
let price

function distanceFromHqInBlocks(locationBlocks){
    if(locationBlocks > scuberBlocks){
        distance = locationBlocks - scuberBlocks
    }else if (locationBlocks < scuberBlocks){
        distance = scuberBlocks - locationBlocks
    }else{
        distance = 0
    }
    return distance
}

function distanceFromHqInFeet(locationBlocks){
    distanceFromHqInBlocks(locationBlocks)
distance = distance * 264
    return distance
}

function distanceTravelledInFeet(start, end){
    if(start < end){
        distance = (end - start) * 264
    }else if (start > end){
        distance = (start - end) * 264
    }else{
        distance = 0
    }
    return distance
}

function calculatesFarePrice(start, end){
    distanceTravelledInFeet(start, end)
    if(distance <= 400){
        price = 0
    }else if(distance > 400 && distance <= 2000){
        distance = distance - 400
        price = distance * 0.02
    }else if(distance > 2000 && distance <= 2500){
        price = 25
    }else{
        price = "cannot travel that far"
    }
    return price
}
