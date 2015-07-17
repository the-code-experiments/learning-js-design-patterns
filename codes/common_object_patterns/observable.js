/**
 * Objective: to understand the use of observable pattern.
 */

var Product = function(name, price) {

    var priceChanging = [],
        priceChanged = [];

    this.name = function(val) {
        return name;
    };

    this.price = function(val) {
        if (val !== undefined && val !== price) {

            for (var i = 0; i < priceChanging.length; i++) {
                if (!priceChanging[i](this, val)) {
                    return price;
                }
            }
            price = val;

            for (i = 0; i < priceChanged.length; i++) {
                priceChanged[i](this);
            }
        }
        return price;
    };

    this.onPriceChanging = function(callback) {
        priceChanging.push(callback);
    };

    this.onPriceChanged = function(callback) {
        priceChanged.push(callback);
    };
};

var product = new Product("Github", "50.55");

console.log("The product is: ", product.name());

console.log("The price is: $", product.price());

product.onPriceChanging(function(b, price) {
    if (price > 100) {
        console.log("System error, price has gone unexpectedly high");
        return false;
    }
    return true;
});

product.onPriceChanged(function(b) {
    console.log("The product price has changed to: $", b.price());
});

product.price(20.05);
product.price(250);