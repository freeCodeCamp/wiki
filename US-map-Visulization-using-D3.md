# US State Map Visualization using D3.js  
![screen shot 2016-05-19 at 6 29 43 pm](https://cloud.githubusercontent.com/assets/8707780/15415521/fa585e4c-1df7-11e6-832e-66d00f4354e1.png)
## Project Explanation: 

We have the sample data of US States: Number of serious accidents reported for every state in US. 

We have this data in three categories: Lowest reported number for a month , Average reported accidents in a year and Highest number reported in a month, as showed in below sample data. 

We want to draw a US Map and visualize this data such that, when we hover mouse over a state, it should show this data for that particular state. 

## Sample Data:
AZ: 13 41 57

CA: 41 60 81 

NY: 6 35 54  and so on. 
## Hints and Resources : 
### Step by Step instructions: 
**•	First , we will need to create a US map.** 

1 ) You can either create a map from scratch using sources like - Stately (https://intridea.github.io/stately/ )  
2) Get a already created map from http://freehtml5maps.com  or Use this Javascript -(http://bl.ocks.org/NPashaP/raw/a74faf20b492ad377312/3513ad985b2fa93ea35f2fc864cb30540c298171/uStates.js)

**•	Add your map to the main javascript used for visualization**

For Example, 
 `<script src="uStates.js"></script> <!-- creates uStates. -->`
 
**•	Create Div tag to hold tooltip and create SVG to hold you map.** 

For Example, 
```
<div id="tooltip"></div>
<svg width="960" height="600" id="statesvg"></svg> 
```
**•	Create Tooltip function to create html content string in tooltip div.** 

This tooltip function will return a table and this table will be shown whenever we hover mouse over the state 
Table should be something like this ( As shown in the first figure) :
			Arizona
			Low  13
			Average 41
			High 57
	
**•	Draw states on id (#statesvg in our example ) with data and tooltip function**

For example, 
 `uStates.draw("#statesvg", sampleData, tooltipFunc);`

**Final output will be something like this: ( Hovered the mouse over California )** 
![screen shot 2016-05-19 at 6 37 57 pm](https://cloud.githubusercontent.com/assets/8707780/15415673/0dd852f0-1df9-11e6-8962-26873fa87af2.png)
**References:**

1. D3.js Examples and Documentations - https://d3js.org
2. NPashaP GitHub: https://github.com/NPashaP 
3. Stately (https://intridea.github.io/stately/ )  
4. FreeHTML5Maps - http://freehtml5maps.com
