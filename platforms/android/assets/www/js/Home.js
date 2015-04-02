/**
 * Created by marco on 21/10/2014.
 */


var Home = function(){
    var Home = function(){};
    var slider = null;
    var backcolor = ["yellow", "blue" , "red", "black"];
    var changePic = function(){
        console.log("change pic");
        var i = Math.floor(Math.random() * backcolor.length);
        $("#Slider").css("background-color", backcolor[i]);
    };
    Home.prototype = {

        init: function(){
            $('#PageContainer').html(Template.Load("Home"));
            Model.page = "Home";
            this.slideShow(true);
        },

        slideShow: function(action){

            if(action){//true mean turn on slide shows
                changePic();
                slider = setInterval(changePic, 3000 );
            }
            else{
                clearTimeout(slider);
            }
        }

    }
    return new Home();

}();