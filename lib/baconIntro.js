
$(() => {
/**
 * ONE.
 * Let's start with something simple. On the page, you should start with a 
 * single button labelled "Click me.".
 * 
 * Much in the same way in the previous section we created a stream from an
 * array, there are methods in Bacon.js to convert incoming events to streams
 * too.
 * 
 * In our first exercise, to demonstrate that the API is the same, use the 
 * same syntax as before to log 'click' out to the console whenever the button
 * is clicked.
 */

    var btnClicks = $('#one button').asEventStream('click');

})