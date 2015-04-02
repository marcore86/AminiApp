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
