class Button {
  constructor(index,label,x,y) {
    this.index = index;
    this.label = label;
    this.x = x;
    this.y = y;
    this.clicked = 0;
  }

  define(){
    var text = groupCourses.append("text")
              .text(this.label)
              .attr("x", this.x+10)
              .attr("y", this.y+5+buttonHeight/2)
              .style("font-size",12)
              .style("fill","#668cff")
              .style("font-weight","bold")
              .attr('id','buttonText'+this.index);
    var rect = groupCourses.insert("rect","text")
              .attr("x", this.x)
              .attr("y", this.y)
              .attr("width", buttonWidth)
              .attr("height",buttonHeight)
              .attr('rx', 3)
              .attr('ry', 3)
              .attr('fill', "white")
              .attr('stroke', '#C0C0C0')
              .attr('id','buttonRect'+this.index);
  }
}


createButton = function(index,label,x,y) {

var dispatch = d3.dispatch('press', 'release');

function my() {
    var g = d3.select("g")
        .attr('id', 'courseButton_' + index)
        .attr('transform', 'translate(' + x + ',' + y + ')');

    var text = g.append('text').text(label);
    var defs = g.append('defs');
    var rect = g.insert('rect', 'text')
        .attr("x", x)
        .attr("y", y)
        .attr("width", 250)
        .attr("height",20)
        .attr('rx', 3)
        .attr('ry', 3)
        .attr('fill', "red")
        .on('click', toggle);
  }

function activate() {
  d3.select(this.parentNode).select("rect").classed('active', true);
}

function deactivate() {
  d3.select(this.parentNode).select("rect").classed('active', false);
}

function toggle(d, i) {
  if (d3.select(this).classed('pressed')) {
      release.call(this, d, i);
      deactivate.call(this, d, i);
      courseClickCount[index] = 0;
  } else {
      press.call(this, d, i);
      activate.call(this, d, i);
      courseClickCount[index] = 1;
  }
}

function press(d, i) {
  dispatch.call('press', this, d, i)
  d3.select(this).classed('pressed', true);
}

function release(d, i) {
  dispatch.call('release', this, d, i)
  my.clear.call(this, d, i);
}

my.clear = function(d, i) {
  d3.select(this).classed('pressed', false);
}

my.on = function() {
  var value = dispatch.on.apply(dispatch, arguments);
  return value === dispatch ? my : value;
};

return my;
}
