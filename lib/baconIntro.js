
$(() => {
/**
 * ONE. Event Streams.
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

    let btnClicks = $('#one button').asEventStream('click');
    
    /*----> replace this line with your console logging code <----*/ 


/**
 * TWO. a) Properties.
 * A property is essentially the 'current value' of a stream. So in terms of
 * pure 'clicks' it's a little meaningless, however it's a nice way of 
 * abstracting away side effects and retrieving values live.
 * 
 * Bacon.js also integrates with a jQuery-like API to display these values as
 * they occur. You can also create streams from properties, which provides a
 * powerful and clean mechanism for modelling quite complex workflows. We hope
 * to play with these later.
 * 
 * You can either explicitly create a property using toProperty() and 
 * manipulate it from there. Or you may implicitly use assign, which passes 
 * through the current property to a jQuery method.
 * 
 * In the first part of this task, we want you to simply pass through the
 * mouseMove event through to a div on the page with an id of two (it's already
 * there, trust us).
 * 
 * b) Maps.
 * "That's rubbish!" You might, and should, say. Luckily, you will hopefully 
 * remember that these stream things are just like arrays, we can map them to
 * pull out some useful values.
 * 
 * Do that here so `#two` contains the pageX and pageY properties of the move
 * event. 
 */

    let mouseMove = $(window).asEventStream('mousemove');
    
    /*----> replace this line with your property code <----*/ 

});
