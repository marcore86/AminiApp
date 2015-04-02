/**
 * Created by marco on 25/03/2015.
 */


requirejs.config({
    baseUrl: 'js/Lib',
    paths: {
        app: '../scripts',
        data: '../data',
        jquery : 'jquery_',
        utility: '../Utility'
    }
});

requirejs(["app/Main"], function(Main){

    Main.OnLoad();
});