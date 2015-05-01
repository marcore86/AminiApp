/**
 * Created by marco on 21/10/2014.
 */

define(function(require){
    var handler = {};
    var klass = {};
    var _clearPage = function(){
        var Model = require("data/Model");
        if(Model.page === "Home"){
            handler["Home"] = require("app/Home");
            handler["Home"].deinit();
        }
    };
    var _action = function (event){
            //who is the caller?
            var tmp = event.target.id,
            caller = parseInt(tmp.substr(tmp.indexOf("-")));
            console.log("pollo " + caller);
            _clearPage();
            switch (caller) {
                case 0 :
                    var tmp = handler["Home"] || require("app/Home");
                    tmp.init();
                break;
                case 1 :
                    var tmp = require("app/Profile");
                    tmp.init();
                break;
                case 4 :
                    var tmp = require("app/Messaging");
                    tmp.init();
                break;
            }
        };

    klass.init = function(){
        $('.button').on('click',_action);
    };

    return klass;

});
