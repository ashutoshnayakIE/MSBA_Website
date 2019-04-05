function colorNode(name){
  //iterate through all teh dom and get the DOM which has the data
  groupTree.selectAll(".node").filter(function(d){
    if (d.data.name == name){
      if (d.parent){
        colorNode(d.parent.data.name);
      }
      return(d);
    }
  }).style("fill", "black");
}

function fade(name){
  root.links().forEach(d =>{
    var idl = (d.target.data.name+"-"+d.target.data.course).replace(/\s+/g, '');

    if (idl.includes(name)){
      d3.select("#"+idl).style("opacity", 1);
      var par = d.target.parent;
      var idl = (par.data.name+"-"+par.data.course).replace(/\s+/g, '');
      d3.select("#"+idl).style("opacity", 1);

      for (var p=0; p < 8; p++){
        if (par.parent){
          var idl = (par.parent.data.name+"-"+par.parent.data.course).replace(/\s+/g, '');
          d3.select("#"+idl).style("opacity", 1);
          par = par.parent;
        } else {
          break;
        }
      }

    }
  });
}


function highlightCourse(){

  if (totalClicks == 0 || totalClicks == 6){
    groupTree.selectAll(".node").style("fill", "black");
    groupTree.selectAll(".link").style("opacity", 1);
  } else {
    groupTree.selectAll(".node").style("fill", "#F0F0F0");
    groupTree.selectAll(".link").style("opacity", 0.1);

    for (var i=0; i< 6; i++){

      if (classClick[i] == 1){
        var abbreviation = classAbbreviation[i];

        groupTree.selectAll(".node").filter(function(d){
          if (d.data.course.includes(abbreviation)){
            return(d);
          }
        }).style("fill", "black");

        root.links().forEach(d =>{
          if (d.target.data.course.includes(abbreviation)){
            var idl = (d.target.data.name+"-"+d.target.data.course).replace(/\s+/g, '');
            d3.select("#"+idl).style("opacity", 1);
          }
        });

      }
    }
  }
}
