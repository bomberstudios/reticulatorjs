/**
* reticulator.js
* ---------------------------------
* Version 0.01
* Written by Manuel Muñoz Solera (mamuso@mamuso.net)
* @requires love
*
* Copyright 2009 Manuel Muñoz Solera
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*/

/**
* @description Plugin that overlays a defined grid to follow for front
* development purposes. Also allows you to create individual vertical and
* horizontal guides.
* 
* By default you get a 951/16/9 grid
* 
* This js is inspired on the grid section of the Ale Muñoz OrangeCommands
* http://bomberstudios.com/orangecommands
* 
*
*/

/**
* @returns an unique identificator for the guide container 
* 
*/
var ReticulatorId = "ReticulatorCont" + String((new Date()).getTime()).replace(/\D/gi, '');

/**
* merge objects prototype
*
*/
Object.prototype.merge = function (ob) {
  var o, i, z;
  o = this;
  i = 0;
  for (z in ob) {
    if (ob.hasOwnProperty(z)) {
      o[z] = ob[z];
    }
  }
  return o;
};

/**
* Are we in explorer?
* @constructor
* 
*/
var IsExplorer = function () {
  return (navigator.userAgent.indexOf('MSIE') !== -1);
};

/**
* Building an standard container (once) for all the grids and guides.
* @constructor
* 
*/
var BuildGuideContainer = function () {
  // are you there?
  var guideCont = document.getElementById(ReticulatorId);

  if (guideCont === null) {
    guideCont = document.createElement("div");
    guideCont.id =              ReticulatorId;

    // style it now
    guideCont.style.height =    "1px";
    guideCont.style.width =     (new IsExplorer() ? document.body.offsetWidth : window.innerWidth) + "px";
    guideCont.style.position =  (new IsExplorer() ? "absolute" : "fixed");
    guideCont.style.top =       0;
    guideCont.style.left =      0;

    // send this to the body
    document.body.appendChild(guideCont);        
  }

  return guideCont;
};

/**
* VerticalGuide.
* @constructor
* 
*/
var VerticalGuide = function (options) {
  // default guide options
  this.defaults = {
  };
  // we can override the default options
  this.options = this.defaults.merge(options);    
};


/**
* HorizontalGuide.
* @constructor
* 
*/
var HorizontalGuide = function (options) {
  // default guide options
  this.defaults = {
  };
  // we can override the default options
  this.options = this.defaults.merge(options);    
};

/**
* Reticulator is an abstract base that contains the basics of the grid.
* @constructor
* 
*/
var Reticulator = function (options) {
  // default grid
  this.defaults = {
    width: 951,
    columns: 16, // => 0 if you want to create an empty base
    gutter: 9,
    align: "center",
    color: "#00FF00",
    opacity: 0.7
  };
  // overriding the default options
  this.options = this.defaults.merge(options);

  // here we go!
  this.buildGrid();
};

/**
* Method to build grid layout div.
* @returns the layout div
* 
*/
Reticulator.prototype.buildGridLayout = function () {
  var margins, gridLayout;
  // aling this mess
  margins = "0px auto"; // center by default
  switch (this.options.align) {
    case "left":
      margins = "0px";
      break;
    case "right":
      margins = "0px 0px 0px auto";
      break;
  }

  // here we go!
  gridLayout = document.createElement("div");
  
  // style this
  gridLayout.style.height =    "1px";
  gridLayout.style.width =     this.options.width + "px";
  gridLayout.style.position =  "relative";
  gridLayout.style.margin =     margins;
  
  // to the container
  BuildGuideContainer().appendChild(gridLayout);        
  
};

/**
* Hub function that calls all the grid things :)
* 
*/
Reticulator.prototype.buildGrid = function () {
  var i, cumulative;
  if (this.options.columns !== 0) {
    
    // basegrid basic settings all together in this map
    this.basegrid = {
      layout: this.buildGridLayout(), // layout object
      guides: (this.options.gutter === 0 ? this.options.columns : this.options.columns * 2), // number of guides that we need to draw
      cols: this.options.columns === 0 ? 0 : ((this.options.width - ((this.options.columns - 1) * this.options.gutter)) / this.options.columns) // width for every column
    };

    cumulative = 0;
    for (i = 0; i < this.basegrid.guides; i++) {
      // vertical guides here
    }
    
  }
};
