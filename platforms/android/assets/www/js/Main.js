/**
 * Created by marco on 21/10/2014.
 */


Main = {


    OnLoad : function()  {
        document.addEventListener("deviceready", function(){console.log("device platform = " + device.platform);}, false); //to be continued with console
        //Home.init();
        $('#MenuContainer').html(Template.Load("MenuBar"));
        MenuManager.init();
    }

}


Model = {

    page : null

}