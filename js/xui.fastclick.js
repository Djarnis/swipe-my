(function(x$){x$.fn.fastClick=function(handler){return this.each(function(element,index,xui){x$.FastButton(xui[index],handler)})};x$.FastButton=function(element,handler){var startX,startY;var x$ele=x$(element);var reset=function(){x$(element).un("touchend");x$(document.body).un("touchmove");if(x$ele.hasClass("ui-btn-hover"))x$ele.addClass("ui-btn-up").removeClass("ui-btn-hover");if(x$ele.hasClass("ui-navicon-down"))x$ele.addClass("ui-navicon-up").removeClass("ui-navicon-down")};var onClick=function(event){event.stopPropagation();
reset();handler(event);if(event.type==="touchend")x$.clickbuster.preventGhostClick(startX,startY)};var onTouchMove=function(event){if(Math.abs(event.touches[0].clientX-startX)>10||Math.abs(event.touches[0].clientY-startY)>10)reset()};var onTouchStart=function(event){event.stopPropagation();x$(element).on("touchend",onTouchStart);x$(document.body).on("touchmove",onTouchMove);if(x$ele.hasClass("ui-btn-up"))x$ele.addClass("ui-btn-hover").removeClass("ui-btn-up");if(x$ele.hasClass("ui-navicon-up"))x$ele.addClass("ui-navicon-down").removeClass("ui-navicon-up");
startX=event.touches[0].clientX;startY=event.touches[0].clientY};x$ele.on("touchstart",onTouchStart);x$ele.on("click",onClick)};x$.clickbuster={coordinates:[],preventGhostClick:function(x,y){x$.clickbuster.coordinates.push(x,y);window.setTimeout($.clickbuster.pop,2500)},pop:function(){x$.clickbuster.coordinates.splice(0,2)},onClick:function(event){var x,y,i;for(i=0;i<x$.clickbuster.coordinates.length;i+=2){x=x$.clickbuster.coordinates[i];y=x$.clickbuster.coordinates[i+1];if(Math.abs(event.clientX-
x)<25&&Math.abs(event.clientY-y)<25){event.stopPropagation();event.preventDefault()}}}};x$(function(){document.addEventListener("click",x$.clickbuster.onClick,true)})})(xui);