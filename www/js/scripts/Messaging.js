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
        _messageCounter = 0;

        function _buildMessageGrid(createMessage){
            var t = Model.messages.find('text');
            var m = Model.messages.find('author');
            for(i=0; i < t.length; i++){
                var text = t[i].innerHTML;
                var message = m[i].innerHTML;
                createMessage(text,message);
            }
        };


    klass.init = function(){

        $('#PageContainer').html(Template.Load("Messaging_View"));
        Model.page = "Messaging";
        var that = this;
        document.getElementById("SendNewMessage").addEventListener("click", function(){
            that.createMessage("ciao","papi");
        });
        Model.deferred.then(
            //function to bind once the old messages have been loaded
            _buildMessageGrid
        );
        //Load old content..
        Communication.getOldMessagges();

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
