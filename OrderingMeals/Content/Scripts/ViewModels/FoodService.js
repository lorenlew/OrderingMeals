function FoodService() {
    'use strict';
    var self = this;

    self.availableDishes = ko.observableArray([
        new Dish('Lobster', 'nice', 234, 'Content/Images/21766b7b144076801de5a1742cd8ef01.jpg'),
        new Dish('Stuffed cabbage', 'nice', 222, 'Content/Images/48e144bad6f3892699aad83ba4ebe7db.jpg'),
        new Dish(' Meat', 'nice', 455, 'Content/Images/4d539ebdb1370-rez_27_109.jpg'),
        new Dish('Salad', 'nice', 110, 'Content/Images/chery-s-voronkoy.jpg'),
        new Dish('Fish', 'nice', 140, 'Content/Images/mosfoodnews.ru.jpg'),
        new Dish('Shish kebab', 'nice', 420, 'Content/Images/shashlyk2.jpg'),
        new Dish('Sea snack', 'nice', 410, 'Content/Images/uslugi1000200.jpg')
    ]);

    self.orderedDishes = ko.observableArray([]);

    self.addDishToOrder = function (dish) {
        self.orderedDishes.push(dish);
    };

    self.removeDishFromOrder = function (dish) {
        self.orderedDishes.remove(dish);
    };
};

ko.applyBindings(new FoodService());