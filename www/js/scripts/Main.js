/**
 * Created by marco on 21/10/2014.
 */

define(["app/MenuBar","utility/Template","jquery"],function(MenuManager, Template, $){

    var klass = {};

    klass.OnLoad = function()  {
        console.log("hello");
        document.addEventListener("deviceready", function(){console.log("device platform = " + device.platform);}, false); //to be continued with console
        $('#MenuContainer').html(Template.Load("MenuBar"));
        MenuManager.init();
    }

    return klass;

});
