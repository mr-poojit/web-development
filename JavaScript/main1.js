/**
 * Password valoidation
 *
 * Rules :-
 * 1. Both passwords must match
 * 2. Password must be of 8 characters atleast
 */

let password1 = "poojit1";
let password2 = "poojit1";

let isMatchingPasswords = password1 === password2;
let isRequiredLength = password1.length >= 8;

let isValidPassword = isMatchingPasswords && isRequiredLength;

if (isValidPassword) {
  console.log("This is valid");
} else {
  console.log("Not valid");

  if (!isMatchingPasswords) {
    console.log("Fix : The passwords do not match each other");
  }

  if (!isRequiredLength) {
    console.log("Fix: The password must be of 8 characters");
  }
}
