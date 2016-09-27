var assert = chai.assert;

describe('Array', function() {
  it('should return an array of size 0', function() {
    var arr = getArray();

    assert.equal(arr.length, 0);
  });
});