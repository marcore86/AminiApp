/**
 * Created by marco on 17/10/2014.
 */
define(["jquery"],function ($) { //try to set prototype.
    var klass = function() {
        this.Templates = {};
        this.__folder = "Templates";
        this.__ext = ".html";
    };

    klass.prototype={

        Load: function (name) {
            var self = this;
            var id = name;//.toLowerCase();
            //id = id.charAt(0).toUpperCase() + id.slice(1);

            if (this.Templates.hasOwnProperty(id)) {
                return this.Templates[id];
            }

            $.ajax({
                url: self.__folder + '/' + id + self.__ext,
                async: false,
                success: function (data) {
                    self.Templates[id] = data.toString();
                },
                error: function (e) {
                    console.log('Template Error: ' + e);
                }
            });

            return this.Templates[id];
        }
    };
    return  new klass();
});
