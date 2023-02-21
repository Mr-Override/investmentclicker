(function() {
    "use strict";
    var t = function(e, n) {
        return t = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(t, e) {
            t.__proto__ = e;
        } || function(t, e) {
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        }, t(e, n);
    };
    var e = {
        collectables: [ {
            name: "Stand",
            controller: function(e) {
                function n() {
                    return e.call(this, "Stand", 10, .1, .1) || this;
                }
                return function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                    function o() {
                        this.constructor = e;
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, 
                    new o);
                }(n, e), n;
            }(function() {
                function t(t, e, n, o) {
                    this.amount = 0, this.name = t, this.price = e, this.increase = n, this.priceIncrease = o;
                }
                return t.prototype.buy = function() {
                    console.log("bought");
                }, t;
            }())
        } ]
    }, n = {
        controllers: {
            gameController: function() {
                function t() {
                    this.data = e, this.names = {
                        collectables: [],
                        modifiers: []
                    }, this.collectables = [], this.init(), this.buy("collectable", "Stand");
                }
                return t.prototype.init = function() {
                    var t = this;
                    this.data.collectables.map((function(e) {
                        t.collectables.push({
                            name: e.name,
                            controller: new e.controller
                        });
                    })), this.collectables.map((function(e) {
                        return t.names.collectables.push(e.name);
                    }));
                }, t.prototype.buy = function(t, e) {
                    if ("collectable" === t) this.collectables.map((function(t) {
                        e === t.name && t.controller.buy();
                    }));
                }, t;
            }(),
            viewController: function() {
                console.log("Main View Controller Online");
            }
        },
        events: function(t, e) {
            this.gameController = t, this.viewController = e, console.table(this.gameController.names);
        },
        version: "0.0.1"
    }, o = n.controllers, l = n.events, r = function() {
        function t() {
            this.loaded = {
                gameController: "",
                viewController: "",
                events: ""
            }, this.init();
        }
        return t.prototype.init = function() {
            this.loaded.gameController = new o.gameController, this.loaded.viewController = new o.viewController, 
            this.loaded.events = new l(this.loaded.gameController, this.loaded.viewController);
        }, t;
    }();
    window.addEventListener("DOMContentLoaded", (function() {
        return new r;
    }));
})();
