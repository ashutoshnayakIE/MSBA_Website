// ------------------- d3js structure for the project ------------------------
var groupTree = groupMain.append("g")
    .attr("transform", "translate(240 0)"); //640 250

const shiftX = 450;
const shiftY = 270;

var tooltip = groupTree
	.append("div")
	.attr("class", "tooltip")
	.style("opacity", 0);


var rectTree  = groupTree.append('rect')
    .attr("x", 0).attr("y", 0)
    .attr("width", width-widthLeft).attr("height", height)
    .attr('fill', 'rgba(0,0,0,0)')
    .attr('stroke', 'black')
    .attr('stroke-linecap', 'butt')
    .attr('stroke-width', '3');

var treemap = d3.cluster()
	.size([600, 600]);

var root = d3.hierarchy(data)
nodes = treemap(root);

// -----------------------------------------------------
color = d3.scaleOrdinal()
    .domain(["Probability","Modeling","Model Testing","Linear Algebra","Data Engineering"])
    .range(d3.schemeSet2);

function project(x, y, angle) {
  var radius = y*0.42;
  var rx = radius* Math.cos(angle)+shiftX;
  var ry = radius* Math.sin(angle)+shiftY;
  return [rx,ry];
}

function setColor(d) {
  var name = d.data.name;
  d.color = color.domain().indexOf(name) >= 0 ? color(name) : d.parent ? d.parent.color : "white";
  if (d.children) d.children.forEach(setColor);
  var XY = project(d.x,d.y,d.data.value);
  d.data.rx = XY[0];
  d.data.ry = XY[1];
}

setColor(root);

var link = groupTree.selectAll(".link")
  .data(root.descendants().slice(1))
.enter().append("path")
  .attr("class", "link")
  .attr("d", function(d) {
      return ("M" + d.data.rx + "," + d.data.ry
      + "C" + (d.data.rx + d.parent.data.rx) / 2 + "," + d.data.ry
      + " " + (d.data.rx + d.parent.data.rx) / 2 + "," + d.parent.data.ry
      + " " + d.parent.data.rx + "," + d.parent.data.ry);
      })
  .attr("stroke", function(d){
    if (d.color != "black"){
      return(d.color);
    }else{
      return("black");
    }
  })
  .attr("id", function(d){
    var str = (d.data.name+"-"+d.data.course).replace(/\s+/g, '');
    console.log(str+"==="+d.data.course);
    return (str);
  });

d3.select("#XGBoost-sa").style("opacity",0.1);
d3.select("#Simulation-sb0sa").style("opacity",0.4);

// adds each node as a group
var node = groupTree.selectAll(".node")
    .data(root.descendants())
  .enter().append("g")
    .attr("class", function(d) {
      return "node" +
        (d.children ? " node--internal" : " node--leaf"); })
    .attr("transform", function(d) {
        return "translate(" + project(d.x, d.y, d.data.value) + ")";
     })
     .on("click", function (d) {
       if (!d.children){
         window.open(
           d.data.website, '_blank'
         );
       }
     })
    .on("mouseover", function(d){
        if (!d.children){
          d3.select(this).style("cursor", "pointer");
        }
     })
     .on("mouseout", function(){
        d3.select(this).style("cursor", "default");
     })
     .on('mouseover.fade', function(d){
       //groupTree.selectAll(".link").style("opacity", 0);
       //fader(0.1, d.data.name);
     })
  	 .on('mouseout.fade', function(d){
       //groupTree.selectAll(".link").style("opacity", 1);
       //highlightCourse();
     });

// adds the circle to the node
node.append("circle")
  .attr("r", 2.5);

function textX(d){
  if (d.children){
    return(-20);
  } else {
    if (d.data.rx < shiftX){
      return(-10);
    } else{
      return(10);
    }
  }
}

function anchorX(d){
  if (d.children){
    return("start");
  } else {
    if (d.data.rx < shiftX - 50){
      return("end");
    } else if (d.data.rx > shiftX + 50) {
      return("start");
    } else {
      return("middle");
    }
  }
}

function textY(d){
  if (d.children){
    return(10);
  } else {
    if (d.data.rx > shiftX-50 && d.data.rx < shiftX+50){
      if (d.data.ry < shiftY){
        return(-10);
      } else {
        return(10);
      }
    } else{
      return(0);
    }
  }
}

node.append("text")
    .attr("dy", ".21em")
    .attr("x", function(d) { return textX(d);})
    .attr("y", function(d) { return textY(d);})
    .text(function(d) { return d.data.name; })
    .style("text-anchor", function(d){ return anchorX(d);})
    .style("color","black")
    .on("mouseover", function(d){
      groupTree.selectAll(".node").style("fill", "#F0F0F0");
      colorNode(d.data.name);
      groupTree.selectAll(".link").style("opacity", 0.1);
      var name = d.data.name.replace(/\s+/g, '');
      fade(name);
    })
    .on("mouseout", function(d){
      groupTree.selectAll(".node").style("fill", "black");
      groupTree.selectAll(".link").style("opacity", 1);
      highlightCourse();
    });
