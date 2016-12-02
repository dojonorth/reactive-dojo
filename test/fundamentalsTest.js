let assert = chai.assert;

describe('Fundamentals', () => {
  describe('Native JS functional methods', () => {
    let input = [1, 2, 3, 4, 5];

    // Replace ___ with your own functions to make these simple tests pass.
    // Don't overthink it, they aren't trick questions, it's just to ensure
    // you've grasped the functional part of functional reactive programming.

    it('uses the native map function to square an array of numbers', () => {
      let squared = input.map(___);
      assert.deepEqual(squared, [1, 4, 9, 16, 25]);
    });

    it('uses the native map function to filter an array of numbers', () => {
      let odds = input.filter(___);
      assert.deepEqual(odds, [1, 3, 5]);
    });

    it('finds the total of an array of numbers', () => {
      let sum = input.reduce(___);
      assert.equal(sum, 15);
    });

    it('successfully chains map filter & reduce', () => {
      let sum = input.map(___).filter(___).reduce(___);
      assert.equal(sum, 35);
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

      stream.onValue(___);

      assert.deepEqual(inputArray, result);
    });

    it('you can process streams in the same way as arrays', (done) => {
      let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

      // In this ridiculously convoluted example, you should use .map, .filter, and .reduce to
      // produce a string of the lowercased planets with a word length of 5 or 6, each appended with
      // a greater than symbol '>'.
      let stream = Bacon.fromArray(planets)//.map....filter...reduce...

      let result = '';
      stream.onValue(result => {
        assert.equal('venus>earth>saturn>uranus>', result);
        done();
      });
    });
  });
});
