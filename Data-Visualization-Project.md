Data Visualization Using D3.js 

Our goal is to learn the basics of data visualization using D3 through this project. 

What is D3? 

For those who are not familiar with D3, D3.js is a JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG and CSS. D3’s emphasis on web standards gives you the full capabilities of modern browsers without tying yourself to a proprietary framework, combining powerful visualization components and a data-driven approach to DOM manipulation.

D3.js helps you attach your data to DOM (Document Object Model) elements. Then you can use CSS3, HTML, and/or SVG showcase this data. Finally, you can make the data interactive through the use of D3.js data-driven transformations and transitions.


Project Explanation: 

Scenario : 
There’s a class of Online students interacting with different topics of the subject and gives quiz on those topics. 
There are 15 topics and on each topic, we have numbers of student who have taken quiz and have scored in three categories: Low, Mid and High

For example (Given data ) : 
Topic:'1’, low:4, mid:13, high:18 
Topic:’2’,  low:11, mid:12, high:6
Topic:'3’,low:12, mid:24, high:6 and so on. 

Note that Topic 1 has 4 + 13 + 8 = 35 student has taken the quiz and Topic 2 has 11+12+6 = 29 student and topic 3 has 42 students and so on. 

With Interactive combination of bar chart and pie chart, where bar chart shows number of students who have interacted with particular topic(taken the quiz)  and pie chart showing classification of that students performance in categories of ‘low, mid, high’, we can visualize our data and get more data analysis from it. 


Hint : 

Step by Step instructions: 
 	D3 Introduction: https://d3js.org 

•	write a javascript function to handle Histogram ( Bar chart ) - Histogram will show the total number of students who has taken the quiz ( interacted with that topic ) for 15 topics ( Tutorial : https://bost.ocks.org/mike/bar/ ) 

•	Create SVG for histogram 
•	Create function for x-axis mapping and add x-axis to histogram SVG
•	Create function for y-axis mapping and Create bars for histogram to contain rectangles and topic labels.
•	create the rectangles and topic labels 
•	create function to update the bars. This will be used by pie-chart

•	write a function to handle pieChart. – pie chart will have three slices – Low , Mid and High to represent scores  (Tutorial - http://zeroviscosity.com/d3-js-step-by-step/step-1-a-basic-pie-chart )
•	create svg for pie chart.
•	create function to draw the arcs of the pie slices - pie slices will be Low , Mid and high 
•	create a function to compute the pie slice angles.
•	Draw the pie slices.
•	create function to update pie-chart. This will be used by histogram.

•	calculate total frequency by segment for all topic.
•	calculate total frequency by state for all segment.

SPOILER ALERT:

<!DOCTYPE html>
<meta charset="utf-8">
<style>
body{
    width:960px;
    margin:150px auto;
}
path {  stroke: #fff; }
path:hover {  opacity:0.9; }
rect:hover {  fill:red; }
.axis {  font: 10px sans-serif; }
.legend tr{    border-bottom:2px solid grey; }
.legend tr:first-child{    border-top:2px solid grey; }

.axis path,
.axis line {
  fill: none;
  stroke: #000;
  shape-rendering: crispEdges;
}

.x.axis path {  display: none; }
.legend{
    margin-bottom:76px;
    display:inline-block;
    border-collapse: collapse;
    border-spacing: 0px;
}
.legend td{
    padding:4px 5px;
    vertical-align:right;
}
.legendFreq, .legendPerc{
    align:right;
    width:90px;
}

</style>
<body>
<div id='dashboard'>
</div>
<script src="http://d3js.org/d3.v3.min.js"></script>
<script>
function dashboard(id, fData){
    var barColor = 'steelblue';
    function segColor(c){ return {low:"#7fffd4", mid:"#20b2aa",high:"#556b2f"}[c]; }
    
    // compute total for each topic.
    fData.forEach(function(d){d.total=d.freq.low+d.freq.mid+d.freq.high;});
    
    // function to handle histogram.
    function histoGram(fD){
        var hG={},    hGDim = {t: 60, r: 0, b: 30, l: 0};
        hGDim.w = 500 - hGDim.l - hGDim.r, 
        hGDim.h = 300 - hGDim.t - hGDim.b;
            
        //create svg for histogram.
        var hGsvg = d3.select(id).append("svg")
            .attr("width", hGDim.w + hGDim.l + hGDim.r)
            .attr("height", hGDim.h + hGDim.t + hGDim.b).append("g")
            .attr("transform", "translate(" + hGDim.l + "," + hGDim.t + ")");

        // create function for x-axis mapping.
        var x = d3.scale.ordinal().rangeRoundBands([0, hGDim.w], 0.1)
                .domain(fD.map(function(d) { return d[0]; }));

        // Add x-axis to the histogram svg.
        hGsvg.append("g").attr("class", "x axis")
            .attr("transform", "translate(0," + hGDim.h + ")")
            .call(d3.svg.axis().scale(x).orient("bottom"));

        // Create function for y-axis map.
        var y = d3.scale.linear().range([hGDim.h, 0])
                .domain([0, d3.max(fD, function(d) { return d[1]; })]);

        // Create bars for histogram to contain rectangles and topic labels.
        var bars = hGsvg.selectAll(".bar").data(fD).enter()
                .append("g").attr("class", "bar");
        
        //create the rectangles.
        bars.append("rect")
            .attr("x", function(d) { return x(d[0]); })
            .attr("y", function(d) { return y(d[1]); })
            .attr("width", x.rangeBand())
            .attr("height", function(d) { return hGDim.h - y(d[1]); })
            .attr('fill',barColor)
            .on("mouseover",mouseover)// mouseover is defined below.
            .on("mouseout",mouseout);// mouseout is defined below.
            
        //Create the Topic labels above the rectangles.
        bars.append("text").text(function(d){ return d3.format(",")(d[1])})
            .attr("x", function(d) { return x(d[0])+x.rangeBand()/2; })
            .attr("y", function(d) { return y(d[1])-5; })
            .attr("text-anchor", "middle");
        
        function mouseover(d){  // utility function to be called on mouseover.
            // filter for selected topic.
            var st = fData.filter(function(s){ return s.Topic == d[0];})[0],
                nD = d3.keys(st.freq).map(function(s){ return {type:s, freq:st.freq[s]};});
               
            // call update functions of pie-chart and legend.    
            pC.update(nD);
            leg.update(nD);
        }
        
        function mouseout(d){    // utility function to be called on mouseout.
            // reset the pie-chart and legend.    
            pC.update(tF);
            leg.update(tF);
        }
        
        // create function to update the bars. This will be used by pie-chart.
        hG.update = function(nD, color){
            // update the domain of the y-axis map to reflect change in frequencies.
            y.domain([0, d3.max(nD, function(d) { return d[1]; })]);
            
            // Attach the new data to the bars.
            var bars = hGsvg.selectAll(".bar").data(nD);
            
            // transition the height and color of rectangles.
            bars.select("rect").transition().duration(500)
                .attr("y", function(d) {return y(d[1]); })
                .attr("height", function(d) { return hGDim.h - y(d[1]); })
                .attr("fill", color);

            // transition the frequency labels location and change value.
            bars.select("text").transition().duration(500)
                .text(function(d){ return d3.format(",")(d[1])})
                .attr("y", function(d) {return y(d[1])-5; });            
        }        
        return hG;
    }
    
    // function to handle pieChart.
    function pieChart(pD){
        var pC ={},    pieDim ={w:300, h: 300};
        pieDim.r = Math.min(pieDim.w, pieDim.h) / 2;
                
        // create svg for pie chart.
        var piesvg = d3.select(id).append("svg")
            .attr("width", pieDim.w).attr("height", pieDim.h).append("g")
            .attr("transform", "translate("+pieDim.w/2+","+pieDim.h/2+")");
        
        // create function to draw the arcs of the pie slices.
        var arc = d3.svg.arc().outerRadius(pieDim.r - 10).innerRadius(0);

        // create a function to compute the pie slice angles.
        var pie = d3.layout.pie().sort(null).value(function(d) { return d.freq; });

        // Draw the pie slices.
        piesvg.selectAll("path").data(pie(pD)).enter().append("path").attr("d", arc)
            .each(function(d) { this._current = d; })
            .style("fill", function(d) { return segColor(d.data.type); })
            .on("mouseover",mouseover).on("mouseout",mouseout);

        // create function to update pie-chart. This will be used by histogram.
        pC.update = function(nD){
            piesvg.selectAll("path").data(pie(nD)).transition().duration(500)
                .attrTween("d", arcTween);
        }        
        // Utility function to be called on mouseover a pie slice.
        function mouseover(d){
            // call the update function of histogram with new data.
            hG.update(fData.map(function(v){ 
                return [v.Topic,v.freq[d.data.type]];}),segColor(d.data.type));
        }
        //Utility function to be called on mouseout a pie slice.
        function mouseout(d){
            // call the update function of histogram with all data.
            hG.update(fData.map(function(v){
                return [v.Topic,v.total];}), barColor);
        }
        // Animating the pie-slice requiring a custom function which specifies
        // how the intermediate paths should be drawn.
        function arcTween(a) {
            var i = d3.interpolate(this._current, a);
            this._current = i(0);
            return function(t) { return arc(i(t));    };
        }    
        return pC;
    }
    
    // function to handle legend.
    function legend(lD){
        var leg = {};
            
        // create table for legend.
        var legend = d3.select(id).append("table").attr('class','legend');
        
        // create one row per segment.
        var tr = legend.append("tbody").selectAll("tr").data(lD).enter().append("tr");
            
        // create the first column for each segment.
        tr.append("td").append("svg").attr("width", '16').attr("height", '16').append("rect")
            .attr("width", '16').attr("height", '16')
			.attr("fill",function(d){ return segColor(d.type); });
            
        // create the second column for each segment.
        tr.append("td").text(function(d){ return d.type;});

        // create the third column for each segment.
        tr.append("td").attr("class",'legendFreq')
            .text(function(d){ return d3.format(",")(d.freq);});

        // create the fourth column for each segment.
        tr.append("td").attr("class",'legendPerc')
            .text(function(d){ return getLegend(d,lD);});

        // Utility function to be used to update the legend.
        leg.update = function(nD){
            // update the data attached to the row elements.
            var l = legend.select("tbody").selectAll("tr").data(nD);

            // update the frequencies.
            l.select(".legendFreq").text(function(d){ return d3.format(",")(d.freq);});

            // update the percentage column.
            l.select(".legendPerc").text(function(d){ return getLegend(d,nD);});        
        }
        
        function getLegend(d,aD){ // Utility function to compute percentage.
            return d3.format("%")(d.freq/d3.sum(aD.map(function(v){ return v.freq; })));
        }

        return leg;
    }
    
    // calculate total frequency by segment for all topic.
    var tF = ['low','mid','high'].map(function(d){ 
        return {type:d, freq: d3.sum(fData.map(function(t){ return t.freq[d];}))}; 
    });    
    
    // calculate total frequency by state for all segment.
    var sF = fData.map(function(d){return [d.Topic,d.total];});

    var hG = histoGram(sF), // create the histogram.
        pC = pieChart(tF), // create the pie-chart.
        leg= legend(tF);  // create the legend.
}
</script>

<script>

//Input data 

var lowdata=[4,11,12,2,5,6,7,8,8,4,3,2,1,6,4];
var middata=[11,12,2,5,6,7,8,8,4,3,2,1,6,4,3];
var highdata=[2,5,6,7,8,8,4,3,2,1,6,4,8,9,10];
var freqData=[
{Topic:'1',freq:{low:lowdata[0], mid:middata[0], high:highdata[0]}}
];
for(var i=2;i<=15;i++)
{
freqData.push({Topic:i,freq:{low:lowdata[i-1],mid:middata[i-1],high:highdata[i-1]}});
}
 /*
 Another way to input the data 
 
var freqData=[
{Topic:'1',freq:{low:4, mid:13, high:89}}
,{Topic:'2',freq:{low:11, mid:22, high:67}}
,{Topic:'3',freq:{low:12, mid:24, high:60}}
,{Topic:'4',freq:{low:8, mid:15, high:86}}
,{Topic:'5',freq:{low:11, mid:24, high:48}}
,{Topic:'6',freq:{low:16, mid:16, high:55}}
,{Topic:'7',freq:{low:19, mid:27, high:33}}
,{Topic:'8',freq:{low:28, mid:32, high:30}}
,{Topic:'9',freq:{low:27, mid:19, high:48}}
,{Topic:'10',freq:{low:16, mid:39, high:27}}
,{Topic:'11',freq:{low:21, mid:19, high:31}}
,{Topic:'12',freq:{low:12, mid:29, high:21}}
,{Topic:'13',freq:{low:31, mid:19, high:27}}
,{Topic:'14',freq:{low:29, mid:15, high:31}}
,{Topic:'15',freq:{low:35, mid:30, high:11}}
];
*/
dashboard('#dashboard',freqData);
</script>



Result of Data Analysis and what can we infer from Visualization  :

- Initial pie chart shows aggregate classification of all student score on all topic combined into three categories ‘low, mid ,high’ 

- Initial bar chart showing number of students who have interacted on that particular topic 

- Any Selected category from pie chart will update bar chart, showing number of students who have interacted on various topics having score belonging to that particular category 

- Any selected bar chart’s bar will update pie chart showing classification of all students score on that particular topic into three categories ‘low, mid, high’.


References :

[1] Examples from https://d3js.org 
[2] D3.js Introduction - https://www.dashingd3js.com/why-build-with-d3js
