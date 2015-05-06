/**
 * Created by Marco on 06/05/2015.
 */

define(["data/Model","jquery","hammer"],function(Model,$,Hammer){
    var klass = {},
        _hammer = null,
        _containerHeight = null,
        _topPosition = 0,
        _numEl = 0;


    //parameter : div where Hammer must work on, item box container(each item has the same box container)
    klass.init = function(divElement,elContainer){
        _hammer = new Hammer(divElement);
        _containerHeight = $(elContainer).height();
    };


    //par : div-id where animate must work on
    klass.set = function (divAnimate,numEl){
        _numEl = numEl;
        _hammer.get('pan').set({ direction: Hammer.DIRECTION_VERTICAL });
        _hammer.on('panend', function(ev) {
            console.log(ev.deltaY);
            console.log("distance "+ev.distance);
            _topPosition = (-(_containerHeight * _numEl) >= (_topPosition + ev.deltaY)) ?  -(_containerHeight * _numEl) : _topPosition+ev.deltaY;
            $( "#"+divAnimate ).animate({

                top: _topPosition.toString()

            }, 300, function() {

                var elPosition = $('#'+divAnimate).position().top;
                // Animation complete. need to check position of pictures
                if( elPosition > 0  ){ //Scrolling Down: current picture is the first one, top must be <=0
                    $('#'+divAnimate).animate({top:"0"},300);
                }else if( elPosition < 0 ){//Scrolling Top: need to check number of item, and then ..
                    if(_numEl === 1){
                        $('#'+divAnimate).animate({top:"0"},300);
                        return;
                    }
                    var limit = _containerHeight * (_numEl-1);
                    if(_topPosition < (limit * -1) ){// ..check if the scroll position has exceeded the last item
                        $('#'+divAnimate).animate({top:(limit * -1).toString()},300);
                    }
                }
            });
        });
    };

    klass.updateNumEl = function(size){
        _numEl = size;
    }

    klass.deinit = function (){

    };

    return klass;

});
