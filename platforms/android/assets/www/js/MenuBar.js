/**
 * Created by marco on 21/10/2014.
 */

var MenuManager = function(){
    var MenuManager = function(){};
    function action (event){
        //how get id of the caller?
        var tmp = event.target.id,
        caller = parseInt(tmp.substr(tmp.indexOf("-")));
        console.log("pollo " + caller);
        switch (caller) {
            case 0 :
                Home.init();
            break;

        }


    }

    MenuManager.prototype = {

        init: function(){
            $('.button').on('click', action);
        }


    }
    return new MenuManager();

}();