function Dish(id, name, discription, price, imagePath) {
    'use strict';
    var self = this;

    self.id = ko.observable(id);
    self.name = ko.observable(name);
    self.discription = ko.observable(discription);
    self.price = ko.observable(price);
    self.imagePath = ko.observable(imagePath);
}
