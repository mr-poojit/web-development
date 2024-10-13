console.log("Hello from JS file.");

let password = "poojit1";

if (password.length >= 8) {
  console.log("Password is valid!!");
} else {
  console.log("Sorry, your password has to be 8 characters");
}

let email = "example@abcgmail.com";

let isGmailaddress = email.includes("@gmail.com");

if (isGmailaddress) {
  console.log("Sorry, you cannot sign up with a @gmail.com address");
} else {
  console.log("This is not a @gmail.com address. So, it is ok!!");
}

let essay = "this is a essay";

let words = essay.split(" ");

let wordCount = words.length;

console.log(wordCount);
