/**
 * Created by Marco on 30/04/2015.
 */

define(["data/Model","utility/Template","jquery"],function(Model, Template,$){
    var klass = {},

        _makeCall = function(url,success){

            $.ajax({
                type: "GET" ,
                url: url ,
                dataType: "xml" ,
                success:function(data){
                    success && success(data);
                },
                error:function(){
                    console.log("An error has occured, please try again");
                }
            });

        };


    klass.init = function(){

    };


    klass.getOldMessagges = function (){
        //dfr = $.Deferred();,
        _makeCall("js/data/data.xml",
            function(data){

                xmlDoc = $.parseXML( data.documentElement.outerHTML ),
                $xml = $( xmlDoc ),
                Model.messages = $xml;
                mess = require("app/Messaging");
                Model.deferred.resolve(mess.createMessage);

            }
        );

    };

    klass.deinit = function (){


    };

    return klass;

});
