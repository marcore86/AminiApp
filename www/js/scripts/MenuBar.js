/**
 * Created by marco on 21/10/2014.
 */

define(function(require){
    var handler = {};
    var clearPage = function(){
        var data = require("data/Model");
        if(data.Model.page === "Home"){
            handler["Home"] = require("app/Home");
            handler["Home"].deinit();
        }
    };
    var klass = {},
        action = function (event){
        //who is the caller?
        var tmp = event.target.id,
        caller = parseInt(tmp.substr(tmp.indexOf("-")));
        console.log("pollo " + caller);
        clearPage();
        switch (caller) {
            case 0 :
                var tmp = handler["Home"] || require("app/Home");
                tmp.init();
            break;
            case 1 :
                var tmp = require("app/Profile");
                tmp.init();
            break;

        }
        },
        tmp = function(){console.log("hjhaa");}

    klass.init = function(){
        $('.button').on('click',action);
    }

    return klass;

})

//var MenuManager = function(){
//    var MenuManager = function(){};
//    function action (event){
//        //how get id of the caller?
//        var tmp = event.target.id,
//        caller = parseInt(tmp.substr(tmp.indexOf("-")));
//        console.log("pollo " + caller);
//        switch (caller) {
//            case 0 :
//                Home.init();
//            break;
//
//        }
//
//
//    }
//
//    MenuManager.prototype = {
//
//        init: function(){
//            $('.button').on('click', action);
//        }
//
//
//    }
//    return new MenuManager();
//
//}();