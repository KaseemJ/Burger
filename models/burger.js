var orm = require("../config/orm.js");

var burgers = {
    findAll: function(cb) {
        orm.findAll("burgers", function(data){
            cb(data);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(data){
            cb(data);
        });
    }
};
    

module.exports = burgers;