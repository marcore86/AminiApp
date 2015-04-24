/**
 * Created by Marco on 23/04/2015.
 */
/**
 * Created by marco on 23/04/2015.
 */

define(["data/Model","utility/Template","jquery"],function(Model, Template,$){
    var klass = {},
        _messageContainer = "<div class=\"messageContainer\">",
        _divCloser = "</div>",
        _pvtFunction = function(){

        };


    klass.init = function(){

        $('#PageContainer').html(Template.Load("Messaging_View"));
        Model.Model.page = "Messaging";
       //Load old content..

    };


    klass.createMessage = function (text,author){

        var message = "<div class=\"message\">" + text + "</div>",
        from = "<div class=\"author\">" + author + "</div>",
        messCompleted = _messageContainer + message + from + _divCloser;
        $('#Messaging').append(messCompleted);
    };

    klass.deinit = function (){

        this.slideShow();

    };

    return klass;

});
