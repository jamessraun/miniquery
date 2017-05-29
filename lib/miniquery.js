/*!
 * miniquery
 */


/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
var SweetSelector = {
  select: function(value){

    if((/#/).test(value))
      return document.getElementById(value.match(/\w+/))
    else if((/\./).test(value))
      return document.getElementsByClassName(value.match(/\w+/))
    else  return document.getElementsByTagName(value)

  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
 var DOM = {
   hide: function(value){

     if((/#/).test(value)){
       return document.getElementById(value.match(/\w+/)).style.display = 'none'
     }else if((/\./).test(value)){

       for (var i=0;i<document.getElementsByClassName(value.match(/\w+/)).length;i++){
         document.getElementsByClassName(value.match(/\w+/))[i].style.display = 'none'
       }
     }else{
       for (var i=0;i<document.getElementsByTagName(value.match(/\w+/)).length;i++){
         document.getElementsByTagName(value.match(/\w+/))[i].style.display = 'none'
       }
     }
   },
   show:  function(value){

     if((/#/).test(value)){
       return document.getElementById(value.match(/\w+/)).style.display = ''
     }else if((/\./).test(value)){

       for (var i=0;i<document.getElementsByClassName(value.match(/\w+/)).length;i++){
         document.getElementsByClassName(value.match(/\w+/))[i].style.display = ''
       }
     }
     else{
       for (var i=0;i<document.getElementsByTagName(value.match(/\w+/)).length;i++){
         document.getElementsByTagName(value.match(/\w+/))[i].style.display = ''
       }
     }
   },
   addClass: function(value,value2){
     if((/#/).test(value))
       return document.getElementById(value.match(/\w+/)).classList.add(value2);
     else if((/\./).test(value))
       return document.getElementsByClassName(value.match(/\w+/))[0].classList.add(value2);
     else  return document.getElementsByTagName(value)[0].classList.add(value2);
   },
   removeClass: function(value,value2){
     if((/#/).test(value))
       return document.getElementById(value.match(/\w+/)).classList.remove(value2);
     else if((/\./).test(value))
       return document.getElementsByClassName(value.match(/\w+/))[0].classList.remove(value2);
     else  return document.getElementsByTagName(value)[0].classList.remove(value2);
   }
 }

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */

 var EventDispatcher = {
   on: function(value,type,callback){

      var event = document.createEvent('Event');
      event.initEvent('build', true, true);

     if((/#/).test(value)){
        document.getElementById(value.match(/\w+/)).addEventListener(type,callback());
     }else if((/\./).test(value)){

       for (var i=0;i<document.getElementsByClassName(value.match(/\w+/)).length;i++){

         document.getElementsByClassName(value.match(/\w+/))[i].addEventListener(type,callback())
       }
     }
     else{
       for (var i=0;i<document.getElementsByTagName(value.match(/\w+/)).length;i++){
        document.getElementsByTagName(value)[i].addEventListener(type,callback());
       }
     }
   }

 }

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */

 var AjaxWrapper = {
   request: function(value){
     var requestcoy = new XMLHttpRequest();

      requestcoy.open(value.type, value.url, true);

      requestcoy.onreadystatechange = function (oEvent) {
          if (requestcoy.readyState === 4) {
              if (requestcoy.status === 200) {
                console.log(value.success(requestcoy.responseText))
              } else {
                 console.log(value.fail());
              }
          }
      };

      requestcoy.send();

     }
 }

 var miniquery = {
   SweetSelector: SweetSelector,
   DOM:DOM,
   EventDispatcher:EventDispatcher,
   AjaxWrapper:AjaxWrapper
 }

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
