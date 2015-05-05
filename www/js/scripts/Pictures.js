/**
 * Created by Marco on 05/05/2015.
 */

define(["data/Model","utility/Template","jquery","hammer"],function(Model, Template,$,Hammer){
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
        var that = this;
        var myElement = document.getElementById("PageContainer");
        var hammertime = new Hammer(myElement);
        hammertime.on('pan', function(ev) {
            console.log(ev.deltaY);
            console.log("distance "+ev.distance);
            $( "#Pictures" ).animate({
                top: ev.deltaY.toString()
            }, 300, function() {
                // Animation complete. need to check position of pictures
                if($('#Pictures').position().top > 0  )
                {
                    $('#Pictures').animate({top:"0"})
                }
                //idea to check bottom scroll limit: count the all movements(+=ev.deltaY) on var will tell you the exactly position of the top of the first pic. Then you just need to check if the current bottom must be fixed.
            });
        });

        document.getElementById("PictureGenerator").addEventListener("click", function(){
            that.createFrame();
        });
        this.createFrame();

    };



    klass.createFrame = function (){

        var picture = "<div id=\"pic-"+_photoCounter+"\" class=\"Picture\"></div>";
        $('#Pictures').prepend(picture);
        _setFrameBackground();
        _photoCounter++;


    };

    klass.deinit = function (){

    };

    return klass;

});
