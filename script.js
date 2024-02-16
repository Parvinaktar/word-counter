function countWords() {
  // Get the text from the textarea
  var text = document.getElementById("words").value.trim();

  // Count the words using a regular expression
  var wordCount = text.split(/\s+/).filter(function (word) {
    return word.length > 0;
  }).length;

  // Display the word count inside the wordnumber div
  document.getElementById("wordnumber").textContent =
    "Word count: " + wordCount;
}
