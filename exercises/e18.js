/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons

  function maxBy(array, cb) {
    if (array.length === 0) {
      return undefined;
    }
    let element = array[0];
    for (let i = 1; i < array.length; i++) { 
      if (cb(array[i]) > cb(element)) {
        element = array[i];
      }
    }
    return element;
  }
  let discoveryYears = data.asteroids.map((asteroid) => asteroid.discoveryYear);
  let yearCount = {};
  discoveryYears.forEach((year) => {
    if (yearCount[year]) {
      yearCount[year]++;
    } else {
      yearCount[year] = 1;
    }
  });
  let maxYear = maxBy(discoveryYears, (year) => yearCount[year]);
  return parseInt(maxYear);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
