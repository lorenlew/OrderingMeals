(function (koModels) {
    'use strict';

    koModels.FoodServiceViewModel = function () {
        var self = this;

        self.availableDishes = ko.observableArray([
            new koModels.Dish(1, 'Lobster', 'nice', 234, 'Content/Images/21766b7b144076801de5a1742cd8ef01.jpg'),
            new koModels.Dish(2, 'Stuffed cabbage', 'nice', 222, 'Content/Images/48e144bad6f3892699aad83ba4ebe7db.jpg'),
            new koModels.Dish(3, ' Meat', 'nice', 455, 'Content/Images/4d539ebdb1370-rez_27_109.jpg'),
            new koModels.Dish(4, 'Salad', 'nice', 110, 'Content/Images/chery-s-voronkoy.jpg'),
            new koModels.Dish(5, 'Fish', 'nice', 140, 'Content/Images/mosfoodnews.ru.jpg'),
            new koModels.Dish(6, 'Shish kebab', 'nice', 420, 'Content/Images/shashlyk2.jpg'),
            new koModels.Dish(7, 'Sea snack', 'nice', 410, 'Content/Images/uslugi1000200.jpg')
        ]);

        self.orders = ko.observableArray([]);

        self.totalSum = ko.computed(function () {
            var total = 0;
            if (self.orders().length !== 0) {
                for (var i = 0; i < self.orders().length; i++) {
                    total += self.orders()[i].total();
                }
            }
            return total;
        });

        self.addDishToOrder = function (dish) {
            var orderWithDish = ko.utils.arrayFirst(self.orders(), function (order) {
                return (dish === order.dish());
            });
            if (orderWithDish) {
                orderWithDish.amount(orderWithDish.amount() + 1);
            } else {
                self.orders.push(new koModels.Order(dish, 1));
            }
        };

        self.removeDishFromOrder = function (dish) {
            var orderWithDish = ko.utils.arrayFirst(self.orders(), function (order) {
                return (dish === order.dish());
            });
            if (orderWithDish && orderWithDish.amount() > 1) {
                orderWithDish.amount(orderWithDish.amount() - 1);
            } else {
                self.orders.remove(orderWithDish);
            }
        };

        self.removeAll = function () {
            self.orders.removeAll();
        };

        self.getNumberOfOrders = function (dish) {
            var orderWithDish = ko.utils.arrayFirst(self.orders(), function (order) {
                return (dish === order.dish());
            });
            if (orderWithDish) {
                return orderWithDish.amount();
            }
            return 0;
        };

        self.getTotalNumberOfOrders = function () {
            var total = 0;
            if (self.orders().length !== 0) {
                for (var i = 0; i < self.orders().length; i++) {
                    total += self.orders()[i].amount();
                }
            }
            return total;
        };
    };

    koModels.Dish = function (id, name, description, price, imagePath) {
        var self = this;

        self.id = ko.observable(id);
        self.name = ko.observable(name);
        self.description = ko.observable(description);
        self.price = ko.observable(price);
        self.imagePath = ko.observable(imagePath);
    };

    koModels.Order = function (dish, amount) {
        var self = this;

        self.dish = ko.observable(dish);
        self.amount = ko.observable(amount);
        self.total = ko.computed(function () {
            return self.amount() * self.dish().price();
        });
    };

}(window.koModels = window.koModels || {}));