Function.prototype.partial = function () {
    var args = [].slice.apply(arguments);
    var self = this;
    return function() {
        return self.apply(null, args.concat([].splice.apply(arguments)));
    };
};