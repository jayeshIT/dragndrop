var Draggable = require('ti.draggable');
if (OS_IOS) {
    var free = Draggable.createView({
        top : 0,
        left : 0,
        width : 100,
        height : 100,
        canResize : true,
        canRotate : true,
        backgroundColor : 'blue'
    });
    free.addEventListener('end', function(e) {
        Ti.API.info(e);
    });
    free.addEventListener('start', function(e) {
        Ti.API.info(e);
    });
    $.index.add(free);
} else {
   
    var free = Draggable.createView({
        top : 0,
        left : 0,
        width : 100,
        height : 100,
        backgroundColor : 'blue'
    });
    $.index.add(free);
    free.addEventListener('start', function(e) {
        Ti.API.info('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
        Ti.API.info('Event "start"');
        Ti.API.info('left: ' + e.left);
        Ti.API.info('top:  ' + e.top);
        Ti.API.info('center:' + JSON.stringify(e.center));
    });
    free.addEventListener('move', function(e) {
        Ti.API.info('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
        Ti.API.info('Event "move"');
        Ti.API.info('left: ' + e.left);
        Ti.API.info('top:  ' + e.top);
        Ti.API.info('center:' + JSON.stringify(e.center));
    });
    free.addEventListener('end', function(e) {
        Ti.API.info('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
        Ti.API.info('Event "end"');
        Ti.API.info('left: ' + e.left);
        Ti.API.info('top:  ' + e.top);
        Ti.API.info('directionVertical: ' + e.directionVertical);
        Ti.API.info('directionHorizontal: ' + e.directionHorizontal);
        Ti.API.info('center:' + JSON.stringify(e.center));
    });
}

$.index.open();
