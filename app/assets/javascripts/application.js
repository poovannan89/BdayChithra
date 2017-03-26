// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery.min
//= require_tree .
//= require jquery_countdown
//= require jquery_cycle


$(document).ready(function(){

  $('#allWishes').cycle({ 
      fx:     'shuffle', 
      speed:  'medium', 
      timeout: 0, 
      next:   '#next2', 
      prev:   '#prev2'
  });

  $('#contentDiv').height($(document).height());

  var flashStopDate = new Date(2017, 03, 29, 10, 0, 0, 0);
  var birthday = new Date(2017, 03, 28, 0, 0, 0, 0);


  if(new Date() < birthday)
  {
      $('#countdown_dashboard').countDown({
                targetDate: {
                  'day':    27,
                  'month':  3,
                  'year':   2017,
                  'hour':   23,
                  'min':    59,
                  'sec':    45
                },
                onComplete:function(){
                  $('#counterDiv').html('<h5 style="color:black;" >Happy birthday Ammu :) </h5><object width="640" height="520" style="visible:none" data="Happybday.swf"></object><h6>My dear Responsible and Romantic Queen</h6>');
                  $('#counterDiv').css('background-image', 'url("assets/writing.png")', 'background-repeat: repeat');
                  $('#counterDiv').css('background-size', '300px');
                }
              });
    }    
});


// Set by specific date/time
function set_by_date() {
    $('#countdown_dashboard').stopCountDown();
    $('#countdown_dashboard').setCountDown({
        targetDate: {
            'day':      28,
            'month':    3,
            'year':     2017,
            'hour':     0,
            'min':      0,
            'sec':      0
        }
    });
    $('#countdown_dashboard').startCountDown();
}
// Set by date/time offset
function set_by_offset() {
    $('#countdown_dashboard').stopCountDown();
    $('#countdown_dashboard').setCountDown({
        targetOffset: {
            'day':      1,
            'month':    1,
            'year':     0,
            'hour':     1,
            'min':      1,
            'sec':      1
        }
    });
    $('#countdown_dashboard').startCountDown();
}

