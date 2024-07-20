function product(prodID, price)
{
    this.prodID = prodID;
    this.price = price;
    this.changePrice =function (discount)
    {
        this.price = price - ((discount/100)*price);
    }
}

var prod = new product("ABC",1500);
console.log(prod);
console.log(prod.price);
prod.changePrice(15);

console.log(prod.price);
