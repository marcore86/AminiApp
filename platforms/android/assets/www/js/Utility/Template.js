/**
 * Created by marco on 17/10/2014.
 */

var Template = (function () {
    var Template = function(){
        this.Templates = {};
        this.__folder = "Templates";
        this.__ext = ".html";
    };

    Template.prototype={

        Load: function (name) {
            var self = this;
            var id = name;//.toLowerCase();
            //id = id.charAt(0).toUpperCase() + id.slice(1);

            if (self.Templates.hasOwnProperty(id)) {
                return self.Templates[id];
            }

            $.ajax({
                url: this.__folder + '/' + id + this.__ext,
                async: false,
                success: function (data) {
                    self.Templates[id] = data.toString();
                },
                error: function (e) {
                    console.log('Template Error: ' + e);
                }
            });

            return self.Templates[id];
        }
    };
    return new Template();
})();