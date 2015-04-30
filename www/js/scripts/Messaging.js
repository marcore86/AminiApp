/**
 * Created by Marco on 23/04/2015.
 */
/**
 * Created by marco on 23/04/2015.
 */

define(["data/Model","utility/Template","data/Communication","jquery"],function(Model, Template,Communication,$){
    var klass = {},
        _messageContainer = "<div class=\"messageContainer\">",
        _divCloser = "</div></div>",
        _messageCounter = 0,
        _pvtFunction = function(){

        };


    klass.init = function(){

        $('#PageContainer').html(Template.Load("Messaging_View"));
        Model.Model.page = "Messaging";
        Communication.getOldMessagges();
       //Load old content..

    };


    klass.createMessage = function (text,author){

        _messageCounter++;
        var positionCss = _messageCounter % 2 === 1 ? "mOnLeft" : "mOnRight";
        message = "<div class=\" " +positionCss+ "\"><div class=\"message\">" + text + "</div>",
        from = "<div class=\"author\">" + author + "</div>",
        messCompleted = _messageContainer + message + from + _divCloser;

        $('#Messaging').append(messCompleted);

    };

    klass.deinit = function (){



    };

    return klass;

});
