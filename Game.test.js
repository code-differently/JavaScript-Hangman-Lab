const Hangman = require("./Hangman");
// WORKKING
test("Test guess of letter", () => {
  // Given
  let hangman = new Hangman("Code Differently");

  // When
  hangman.guessLetter("c");
  let actual = hangman.getRemainingGuesses();

  //Then
  let expected = 6;
  expect(actual).toEqual(expected);
});

test("Test incorrect guess of letter", () => {
  // Given
  let hangman = new Hangman("Code Differently");

  // When
  hangman.guessLetter("k");
  let actual = hangman.getRemainingGuesses();

  //Then
  let expected = 5;
  expect(actual).toEqual(expected);
});

test("Test get display message on new game", () => {
  // Given
  // let hangman = new Hangman("Code Differently");
  let hangman = new Hangman("hello");

  // When
  // parameters(undef = false, count=false, newGame=true)

  let actual = hangman.getDisplayMessage(false, false, true);

  //Then
  let expected = "*****";
  expect(actual).toEqual(expected);
});

test("Test get display message after correct guess", () => {
  // Given
  let hangman = new Hangman("Code Differently");
  // let hangman = new Hangman("Test");

  // When
  hangman.guessLetter("e");
  // parameters(undef = false, count=true, newGame=false)

  let actual = hangman.getDisplayMessage(false, true, false);

  //Then
  let expected = "***e*****e*e****";
  // let expected = "*e**";

  expect(actual).toEqual(expected);
});

test("Test get display message after incorrect guess", () => {
  // Given
  let hangman = new Hangman("Code Differently");
  // let hangman = new Hangman("Test");

  // When
  hangman.guessLetter("z");
  // parameters(undef = false, count=true, newGame=false)

  let actual = hangman.getDisplayMessage(false, true, false);

  //Then
  let expected = "****************";
  // let expected = "****";

  expect(actual).toEqual(expected);
});

test("Test is messaged solve when solved", () => {
  // Given
  let hangman = new Hangman("Add");

  // When
  hangman.guessLetter("a");
  hangman.guessLetter("d");
  let actual = hangman.isMessageSolved();

  //Then
  let expected = true;
  expect(actual).toEqual(expected);
});

test("Test is messaged solve when not solved", () => {
  // Given
  let hangman = new Hangman("Code Differently");

  // When
  hangman.guessLetter("c");
  hangman.guessLetter("d");
  hangman.guessLetter("e");
  let actual = hangman.isMessageSolved();

  //Then
  let expected = false;
  expect(actual).toEqual(expected);
});
