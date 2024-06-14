const { v4: uuidv4 } = require('uuid');
let storingData = {} //storing the json data
let id ='' //initializing id outside 

const pointsLetters = retailerName => {
    let total = 0
    retailerName = retailerName.toLowerCase()
    for (let i = 0; i <retailerName.length; i++){
        if (retailerName[i].charCodeAt() >= 97 && retailerName[i].charCodeAt() <= 122){
            total ++
        }
    }
    return total
}

const pointsTotal = totalAmount => {
    let total = 0
    totalAmount = Number(totalAmount)
    if (totalAmount % 1 === 0){
        total += 50
    }
    if (totalAmount/.25 === Math.floor(totalAmount/.25)){
        total += 25
    } 
    return total;
}

const pointsTotalItems = itemsList => Math.floor(itemsList.length/2) * 5

const pointsDateOdd = dateOfPurchase => Number(dateOfPurchase.slice(-2)) % 2 ? 6 : 0


const pointsTimeOfPurch = timeOfPurchase => {
    timeOfPurchase = Number(timeOfPurchase.replaceAll(':',""))
    return timeOfPurchase > 1400 && timeOfPurchase < 1600 ? 10 : 0
}

const pointsLength = itemsList =>{
    let total = 0;
    for (let i = 0; i < itemsList.length; i++) {
            let itemDiv3 = itemsList[i].shortDescription.trim().length;
            if (itemDiv3 % 3 === 0) {
                total += Math.ceil((Number(itemsList[i].price) * 0.2));
            }
    }
    return total;
}

module.exports =  {
   
    getPoints: async(req, res) => {
        try{
            let message =  await storingData[req.params.id]
            let total = 0 
            total += pointsLetters(message.retailer) + pointsTotal(message.total) + pointsTotalItems(message.items) + pointsDateOdd(message.purchaseDate) +pointsTimeOfPurch(message.purchaseTime) + pointsLength(message.items)
            //console.log('pointsLetters ' + pointsLetters(message.retailer) + 'pointsTotal ' + pointsTotal(message.total) + 'pointsTotalItems ' + pointsTotalItems(message.items) + 'pointsOddDate ' + pointsDateOdd(message.purchaseDate) + 'time ' + +pointsTimeOfPurch(message.purchaseTime) + 'length ' + pointsLength(message.items))
            return res.json({'points' : total});   
        }catch(err){
            console.log(err)
        }
    },

    postId: async (req,res) => {
        try{
            let receiptItem = await req.body
            id = uuidv4() //generates an id
            storingData[id] = receiptItem
            res.json({'id' : id})
        }catch(err){
            console.log(err)
        }
    }
}