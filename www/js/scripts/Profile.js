/**
 * Created by marco on 02/04/2015.
 */


define(["data/Model","utility/Template","jquery"],function(Model, Template, $){

    var klass = {};

    klass.init = function()  {
        console.log("init profile");
        $('#PageContainer').html(Template.Load("Profile"));
        Model.Model.page = "Profile";
    }

    return klass;

});
