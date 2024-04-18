/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  var word = s;
  //console.log("word:", word)
  var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  var vowelsArray = [];
  var indecesArray = [];
  var flippedWord = [];

  var map = new Map();

  for (var i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      indecesArray.push(i);
      vowelsArray.splice(0, 0, s[i]);
    }
  }

  indecesArray.forEach((item, index) => {
    map.set(item, vowelsArray[index]);
  });

  for (var i = 0; i < word.length; i++) {
    indecesArray.includes(i)
      ? flippedWord.push(map.get(i))
      : flippedWord.push(word[i]);
  }

  flippedWord = flippedWord.join("");

  return flippedWord;
};

var testCases = ["hello", "leetcode", "volunteer", "euphoria", "ambiguity"];
var answers = [];
testCases.forEach((word) => {
  answers.push(reverseVowels(word));
});

console.log("\n\n 345. Reverse Vowels of a String\n");
console.log(
  "Given a string s, reverse only all the vowels in the string and return it. \nThe vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.\n"
);
console.log("---------------------------------------------------");
console.log("EXPECTED RESULTS : ");
console.log("['holle', 'leotcede','velentuor', 'aiphorue', 'imbugiaty']");
console.log("FIRST APPROACH RESULTS: ");
console.log(answers);
console.log("---------------------------------------------------");

/* NOTE: This is my first successful solution to the problem. Currently looking at optimizing. Ideally will
involve a two pointer solution.*/

//////////////////////////////////////////

/**
 * @param {string} s
 * @return {string}
 */
var twoPointerSolution = function (s) {
  var charArray = s.split('');
  //console.log(charArray);
  var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
 
  var startIndex = 0;
  var endIndex = charArray.length-1;

  //console.log(charArray[startIndex]);
  //console.log(charArray[endIndex]);

  while(startIndex < endIndex){
    while(startIndex < endIndex && !vowels.includes(charArray[startIndex])){
      startIndex++;
    }

    while(startIndex < endIndex && !vowels.includes(charArray[endIndex])){
      endIndex--;
    }

    let temp = charArray[startIndex];
    charArray[startIndex] = charArray[endIndex];
    charArray[endIndex] = temp;
    startIndex++;
    endIndex--;
  }

  var word = charArray.join('');
  //console.log("word:", word);
  return word;
};

answers = [];
testCases.forEach((word) => {
  answers.push(twoPointerSolution(word));
});

console.log("TWO POINTER SOLUTION ANSWERS:");
console.log(answers);
