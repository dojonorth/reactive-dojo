var assert = chai.assert;

describe('Fundamentals', () => {
  describe('Native JS functional methods', () => {
    let input = [1, 2, 3, 4, 5];

    // Replace ___ with your own functions to make these simple tests pass.
    // Don't overthink it, they aren't trick questions, it's just to ensure
    // you've grasped the functional part of functional reactive programming.

    it('uses the native map function to square an array of numbers', () => {
      let squared = input.map(___);
      assert.deepEqual([1, 4, 9, 16, 25], squared);
    });

    it('uses the native map function to filter an array of numbers', () => {
      let odds = input.filter(___);
      assert.deepEqual([1, 3, 5], odds);
    });

    it('finds the total of an array of numbers', () => {
      let sum = input.reduce(___);
      assert.equal(15, sum);
    });

    it('successfully chains map filter & reduce', () => {
      let sum = input.map(___).filter(___).reduce(___);
      assert.equal(35, sum);
    });
  });

  describe('Observables and further concepts', () => {
    // The intention here is to get you used to FRP concepts and map
    // bacon.js constructs on to the native functional concepts you
    // used above. We're using side effects and state in order to avoid
    // as little extra syntax as possible.

    it('Basic streaming', () => {
      let inputArray = ['This', 'was', 'an', 'array'];
      let stream = Bacon.fromArray(inputArray);
      let result = []

      stream.onValue(x => result.push(x));

      assert.deepEqual(result, inputArray);
    });

    it('you can process streams in the same way as arrays', () => {
      let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

      // In this ridiculously convoluted example, you should use .map, .filter, and .reduce to
      // produce a string of the lowercased planets with a word length of 5 or 6, each appended with
      // a greater than symbol '>'.
      let stream = Bacon.fromArray(planets)//.map....filter...reduce...

      let result = '';
      stream.onValue(val => result = val);

      assert.equal(result, 'venus>earth>saturn>uranus>');
    });

    it('Properties / front-end events', () => {
      // stream === an array of events
      // property === a value representing the output of some events
      // reduce (or 'scan' in bacon parlance) produces a property
      // bacon methods can work on both streams and properties

      // so here we want to start off dead simple - a single event stream, maybe make it console.log
      // just enough to link bacon to things that happen.

      // probably good to introduce properties as soon as possible.
      // Map a button click to increment a number. Set up element in page to watch sum of that number.

      // then show we can merge streams. Introduce decrementer. Merge With incrementer.

    });

    it('putting it all together', () => {
      // Forms seem like a good test-bed for streams and properties

      // 1. Simple property validation: disable button when no content in text field
      // 2. use .and to validate two text fields
      // 3. use .not() with submitted to only allow one submission

    })
  });
});