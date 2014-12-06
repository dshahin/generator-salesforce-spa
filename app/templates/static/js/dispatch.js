/*! dispatch - v1.0.0 - 2014-11-24
* https://github.com/dshahin/dispatch
* Copyright (c) 2014 dan shahin; Licensed MIT */
(function ($) {


  // Static method.
  $.dispatch = function (options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.dispatch.options, options);
    // Return the name of your plugin plus a punctuation character.
    return dispatch(options); ;
  };

  // Static method default options.
  $.dispatch.options = {
    mock : true,
    backgroundColor: 'red',
    selector : '#ready',
    message: 'ready!',
    delay: 0,
    callback: function(result,event){

    }
  };

  function dispatch(options){
    if(options.mock){

      setTimeout(options.callback,options.delay);
      
    }else{
      // return {
      //   mock: false,
      //   message: 'this is not a mock'
      // }

      Visualforce.remoting.Manager.invokeAction (
          appSettings.jsr.createTargetAudience,
          targetAudienceRequest,
          options.callback
      );
    }
  
  }


}(jQuery));
