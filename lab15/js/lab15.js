//Lab 15 - AJAX
//this javascript uses ajax to incorporate the chucknorris.io api and trigger a button for chuck norris jokes
//morris carmichael
//6/5/2024
//
//attach api to button output
$(document).ready(function() {
    $('#button').on('click', function() {
      $.ajax({
        type: 'GET',
        url: 'https://api.chucknorris.io/jokes/random',
        dataType: 'json',
        success: function(data) {
          var joke = data.value;
          $('#output').html(joke);
        }
      });
    });
  });