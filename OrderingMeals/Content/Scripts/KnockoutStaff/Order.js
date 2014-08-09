function Order(dish, amount) {
    'use strict';
    var self = this;

    self.dish = ko.observable(dish);
    self.amount = ko.observable(amount);
    self.total = ko.computed(function () {
        return self.amount() * self.dish().price();
    });
}