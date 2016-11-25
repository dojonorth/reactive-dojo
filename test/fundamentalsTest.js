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

    it('uses foreach to effect change elsewhere', () => {
    })

  });

  describe('Observables and further concepts', () => {
    it('observables feature all of the above')
    it('subscribe is an alias for foreach');
    it('more methods - zip, concatAll etc');
  });
});