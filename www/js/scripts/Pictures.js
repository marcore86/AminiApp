/**
 * Created by Marco on 05/05/2015.
 */

define(["data/Model","utility/Template","jquery","app/ScrollManager"],function(Model, Template,$,sMgr){
    var klass = {},
        backcolor = ["yellow", "blue" , "red", "black"],
        _photoCounter = 0,
        _setFrameBackground = function(){
            var i = Math.floor(Math.random() * backcolor.length);
            $("#pic-"+_photoCounter).css("background-color", backcolor[i]);
        };

    function _buildMessageGrid(createMessage){
        var t = Model.messages.find('text');
        var m = Model.messages.find('author');
        for(i=0; i < t.length; i++){
            var text = t[i].textContent;
            var message = m[i].textContent;
            createMessage(text,message);
        }
    };


    klass.init = function(){


        $('#PageContainer').html(Template.Load("Pictures"));
        Model.page = "Pictures";
        var divElement = document.getElementById("PageContainer");
        this.createFrame();
        var elContainer = document.getElementById("pic-0");
        sMgr.init(divElement,elContainer);
        sMgr.set("Pictures");
        sMgr.updateNumEl(_photoCounter);
        var that = this;
        document.getElementById("PictureGenerator").addEventListener("click", function(){
            that.createFrame();
        });

    };



    klass.createFrame = function (){

        var picture = "<div id=\"pic-"+_photoCounter+"\" class=\"Picture\"></div>";
        $('#Pictures').prepend(picture);
        _setFrameBackground();
        _photoCounter++;
        sMgr.updateNumEl(_photoCounter);

    };

    klass.deinit = function (){

    };

    return klass;

});
