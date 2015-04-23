/**
 * Created by Marco on 23/04/2015.
 */
/**
 * Created by marco on 23/04/2015.
 */

define(["data/Model","utility/Template","jquery"],function(Model, Template,$){
    var klass = {},
        _messageContainer = "<div class=\"messageContainer\"></div>",
        _pvtFunction = function(){

        };


    klass.init = function(){

       //Load old content..

    };


    klass.createMessage = function (text,author){

        var message = "<div>" + text + "</div>";
        var from = "<div class=\"author\">" + author + "</div>";

    };

    klass.deinit = function (){

        this.slideShow();

    };

    return klass;

});
