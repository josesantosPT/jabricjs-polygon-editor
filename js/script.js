(function() {

  var canvas = new fabric.CanvasEx('c');
  canvas.selection = false;
  var poly = {'points': [],'array':[] };

  /////////////// EVENTS ///////////////////////////////////////////////////////////////////////

  canvas.on('object:moving', function (evt) {
      draw_all();
  });

  canvas.on('mouse:dblclick', function (options) {
    var pos = canvas.getPointer(options.e);
    var new_point = new fabric.Circle({ top: pos.y, left: pos.x, radius: 3, fill: 'red', selectable:true, evented:true, hasControls:false, id:guid() });
    poly.points.push(new_point);
    draw_all();
  });


  ///////////// METHODS ///////////////////////////////////////////////////////////////////////

  function draw_all(){
    canvas.clear();

    poly.array = [];
    poly.points.map(function(p){
      poly.array.push({x:p.left,y:p.top});
    });

    if ( poly.points.length >= 3)
      canvas.add(new fabric.Polygon(poly.array, {
          fill: '#888888',
          opacity: 0.5,
          selectable: false
      }));

    poly.points.map(function(p){
       canvas.add(p);
    });
  }

  delete_selected_point = function(){
     if(canvas.getActiveObject() != null && canvas.getActiveObject().get('type')==="circle"){
       console.log(canvas.getActiveObject().id);
       poly.points = poly.points.filter(function(p){
         return p.id != canvas.getActiveObject().id;
       });
       draw_all();
     } else {
         console.log("No point selected");
         return;
     }
  }

  delete_all_points = function(){
    poly.points = [];
    draw_all();
  }



  // Auxiliary functions ////////////////////////////////////////////////////

  //Generate a unique GUID identifier
  function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

})();
