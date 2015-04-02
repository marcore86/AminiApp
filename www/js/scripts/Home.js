/**
 * Created by marco on 21/10/2014.
 */

define(["data/Model","utility/Template","jquery"],function(Model, Template,$){
    var klass = {},
    slider = null,
    backcolor = ["yellow", "blue" , "red", "black"],
    changePic = function(){
        console.log("change pic");
        var i = Math.floor(Math.random() * backcolor.length);
        $("#Slider").css("background-color", backcolor[i]);
        };


    klass.init = function(){

        $('#PageContainer').html(Template.Load("Home"));
        Model.Model.page = "Home";
        this.slideShow(true);

    };


    klass.slideShow = function (action){

        if(action){//true mean turn on slide shows
            changePic();
            slider = setInterval(changePic, 3000 );
        }
        else{
            clearTimeout(slider);
        }

    };

    klass.deinit = function (){

        this.slideShow();

    };

    return klass;

});

//var Home = function(){
//    var Home = function(){};
//    var slider = null;
//    var backcolor = ["yellow", "blue" , "red", "black"];
//    var changePic = function(){
//        console.log("change pic");
//        var i = Math.floor(Math.random() * backcolor.length);
//        $("#Slider").css("background-color", backcolor[i]);
//    };
//    Home.prototype = {
//
//        init: function(){
//            $('#PageContainer').html(Template.Load("Home"));
//            Model.page = "Home";
//            this.slideShow(true);
//        },
//
//        slideShow: function(action){
//
//            if(action){//true mean turn on slide shows
//                changePic();
//                slider = setInterval(changePic, 3000 );
//            }
//            else{
//                clearTimeout(slider);
//            }
//        }
//
//    }
//    return new Home();
//
//}();