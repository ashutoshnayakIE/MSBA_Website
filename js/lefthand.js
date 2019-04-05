var width  = 1140;
var height = 550;

const widthLeft = 240;

// main SVG for the base
var groupMain = d3.select("#conceptMap").append("svg")
    .attr("width" , width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(0 0)");

var rectMain = groupMain.append('rect')
    .attr("x", 0).attr("y", 0)
    .attr("width", width).attr("height", height)
    .attr('fill', 'rgba(0,0,0,0)')
    .attr('stroke', '#2378ae')
    .attr('stroke-linecap', 'butt')
    .attr('stroke-width', '3');

var groupLeft = groupMain.append("g")
    .attr("width" , widthLeft)
    .attr("height", height)
    .attr("transform", "translate(0 0)");

// ------------- setting the quarters-----------------
var heightQuarter = 150;
var widthQuarter  = 55;
var quarterData  = [
                    {"index":0,"start":10, "idr":"qRect1","name":"Q1", "idt":"qText1"},
                    {"index":1,"start":65, "idr":"qRect2","name":"Q2", "idt":"qText2"},
                    {"index":2,"start":120,"idr":"qRect3","name":"Q3", "idt":"qText3"},
                    {"index":3,"start":175,"idr":"qRect4","name":"Q4", "idt":"qText4"}
                   ];

var quarterDataIndex  = {};
quarterDataIndex["qRect1"] = 0;
quarterDataIndex["qRect2"] = 1;
quarterDataIndex["qRect3"] = 2;
quarterDataIndex["qRect4"] = 3;

groupQuarter = groupLeft.append("g")
    .attr("width", widthLeft)
    .attr("height",280)

var quarterRectangles = groupQuarter.selectAll("rect")
    .data(quarterData)
    .enter()
  .append("rect")
    .attr("x",function(d,i){
      return(d.start);
    })
    .attr("y",10)
    .attr("height", heightQuarter)
    .attr("width", widthQuarter)
    .attr("id",function(d){
      return(d.idr);
    })
    .attr("fill", "#F8F8F8")
    .attr('stroke', '#A0A0A0');

var quarterNames = groupQuarter.selectAll("text")
    .data(quarterData)
    .enter()
  .append("text")
    .attr("x",function(d,i){
      return(30+i*widthQuarter)
    })
    .attr("y",10+heightQuarter/2)
    .text(function(d){
      return(d.name);
    })
    .style("color", "black")
    .attr("id",function(d){
      return(d.idt);
    });

groupQuarter.selectAll("rect")
    .on("mouseover", function(d) {
      d3.select(this).style("fill", "#357EC7");
      d3.select(this).style("cursor", "pointer");
      var ids = this.id;
      changeQuarterTextMouseOver(quarterDataIndex[ids]);
    })
    .on("mouseout", function() {
      d3.select(this).style("fill", "#F8F8F8");
      d3.select(this).style("cursor", "default");
      var ids = this.id;
      changeQuarterTextMouseOut(quarterDataIndex[ids]);
    })

// ----------- setting the indicators ---------------
const contentX     = 10;
const contentStart = 200;
const contentGap   = 20;
const lineStart    = 120;
var lineEnd        = {}
lineEnd[0] = [230, 180, 150, 150];
lineEnd[1] = [180, 230, 200, 150];
lineEnd[2] = [140, 200, 230, 200];
lineEnd[3] = [140, 200, 200, 230];

var content = [
                {label: "Probability", x: contentX, y: contentStart, index:1},
                {label: "Inference",  x: contentX, y: contentGap+contentStart, index:2},
                {label: "Machine Learning", x: contentX, y: contentGap*2+contentStart, index:3},
                {label: "Practical",   x: contentX, y: contentGap*3+contentStart, index:4}
              ];

for (var i = 0; i < 4; i++){
    groupQuarter.append("text")
    .text(content[i].label)
    .attr("x", content[i].x)
    .attr("y", content[i].y)
    .style("font-size", 12)
    .attr("fill", "#668cff")
    .style("font-weight","bold");

    groupQuarter.append("line")
    .attr("x1", lineStart)
    .attr("y1", contentGap*i+contentStart-contentGap/4)
    .attr("x2", lineStart)
    .attr("y2", contentGap*i+contentStart-contentGap/4)
    .style("stroke", "#A0A0A0")
    .style("stroke-width", 2)
    .attr("id","iLine"+i);

    groupQuarter.append("circle")
    .attr("cx", lineStart)
    .attr("cy", contentGap*i+contentStart-contentGap/4)
    .attr("r", 3)
    .style("fill", "#357EC7")
    .attr("id","iCircle"+i);
}

function changeQuarterTextMouseOver(i){
  d3.select("#"+quarterData[i].idt).style("fill","white");
  for (var j = 0; j<4; j++){
    d3.select("#iLine"+j).attr("x2",lineEnd[i][j]);
    d3.select("#iCircle"+j).attr("cx",lineEnd[i][j]);
  }
}

function changeQuarterTextMouseOut(i){
  d3.select("#"+quarterData[i].idt).style("fill","black");
  for (var j = 0; j<4; j++){
    d3.select("#iLine"+j).attr("x2",lineStart);
    d3.select("#iCircle"+j).attr("cx",lineStart);
  }
}

// ----------- text about the concept map------------
var intro = groupLeft.append('foreignObject')
    .attr('x', 10)
    .attr('y', 285)
    .attr('width', widthLeft-15)
    .attr('height', 100)
    .append("xhtml:body")
    .html('<div style="width: (widthLeft-25)px;font-size:0.8em; text-align: justify">The concept map could be used to understand the relationship between different concepts and courses.</div>');

// ------------- course buttons -----------------------------
var groupCourses = groupMain.append("g")
                  .attr("width",widthLeft)
                  .attr("height",height-285)
                  .attr("transform","translate(0 340)");

const buttonX = 12;
const buttonHeight = 25;
const buttonWidth  = widthLeft-25;
const number_of_courses = 6;

var buttonData = [{label: "BAX-441: Stastistical Exploration",x: buttonX, y: 20, index:0, course:"se"},
            {label: "BAX-442: Advanced Stastistics", x: buttonX, y: 50, index:1, course:"as"},
            {label: "BAX-443: Analytic Decision Making", x: buttonX, y: 80, index:2, course:"adm"},
            {label: "BAX-454: Machine Learning", x: buttonX, y: 110, index:3, course:"ml"},
            {label: "Self: Basics",   x: buttonX, y: 140, index:4, course:"sb"},
            {label: "Self: Advanced", x: buttonX, y: 170, index:5, course:"sa"}
           ];

var classClick = [0,0,0,0,0,0];
var classAbbreviation = ["se","as","adm","ml","sb","sa"];

var classButtonClickR = {};
var classButtonClickT = {};

var totalClicks = 0;

var buttonList = [];
for (var i = 0; i < number_of_courses; i++){
  classButtonClickR["buttonRect"+i] = i;
  classButtonClickT["buttonText"+i] = i;
  var button = new Button(buttonData[i].index,buttonData[i].label,buttonData[i].x,buttonData[i].y);
  button.define();
}

var getKey = (obj,val) => Object.keys(obj).find(key => obj[key] === val);

function courseRectColor(i){
  var key = getKey(classButtonClickR,i);
  if (classClick[i] == 1){
    d3.select("#"+key).style("fill", "#E0E0E0");
  } else {
    d3.select("#"+key).style("fill", "white");
  }
}

groupCourses.selectAll("rect")
    .on("click", function(){
      var ids = this.id;
      var courseAbbreviation = buttonData[classButtonClickR[ids]]['course'];
      var courseClicked = classClick[classButtonClickR[ids]];

      if (courseClicked == 1){
        classClick[classButtonClickR[ids]] = 0;
        totalClicks -= 1;
      } else {
        classClick[classButtonClickR[ids]] = 1;
        totalClicks += 1;
      }
      courseRectColor(classButtonClickR[ids]);
      highlightCourse();
    })
    .on("mouseover", function(){
      d3.select(this).style("cursor", "pointer");
    })
    .on("mouseout", function(){
      d3.select(this).style("cursor", "default");
    });

groupCourses.selectAll("text")
    .on("click", function(){
      var ids = this.id;

      var courseAbbreviation = buttonData[classButtonClickT[ids]]['course'];
      var courseClicked = classClick[classButtonClickT[ids]];

      if (courseClicked == 1){
        classClick[classButtonClickT[ids]] = 0;
        totalClicks -= 1;
      } else {
        classClick[classButtonClickT[ids]] = 1;
        totalClicks += 1;
      }
      courseRectColor(classButtonClickT[ids]);
      highlightCourse();
    })
    .on("mouseover", function(){
      d3.select(this).style("cursor", "pointer");
    })
    .on("mouseout", function(){
      d3.select(this).style("cursor", "default");
    });
