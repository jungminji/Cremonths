"use strict";

$(function(){
  calculateBtn();
  resetBtn();
});

// Event handler - Calculate Button
let calculateBtn = function(){
  $('.btn-cal').on('click', function(){
    $('.cal').fadeOut('fast');
    $('.data-table').delay(300).fadeIn('fast');
  });
};

// Event handler - Reset Button
let resetBtn = function(){
  $('.btn-reset').on('click', function(){
    $('.data-table').fadeOut('fast');
    $('.cal').delay(300).fadeIn('fase');
  });
};
