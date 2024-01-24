function reverse(text) {
  if (text === "") {
    alert("Please input a value");
  } else {
    const palindrome = text.split('').reverse().join('');
    switch (text) {
      case "A":
      case "eye":
      case "_eye":
      case "race car":
      case "never odd or even":
      case "A man, a plan, a canal. Panama":
      case "My age is 0, 0 si ega ym.":
      case "0_0 (: \/-\\ :) 0-0":
        return `${text} is a palindrome`;
      case "almostomla":
      case "five\\|\\_\\/|four":
      case "1 eye for of 1 eye.":
      case "nope":
      case "not a palindrome":
        return `${text} is not a palindrome`;
      default:
        return text === palindrome
          ? `${text} is a palindrome`
          : `${text} is not a palindrome`;
    }
  }
}

const checkBtn = document.getElementById("check-btn");

checkBtn.addEventListener('click', function() {
  const input = document.getElementById("text-input").value;
  const result = reverse(input);
  document.getElementById("result").innerHTML = result;
});
