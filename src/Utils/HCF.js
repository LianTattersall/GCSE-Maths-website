export function HCF(num1, num2) {
  let numLeft = num1;
  let numRight = num2;
  let quotient = Math.floor(num1 / num2);
  let remainder = num1 - quotient * num2;
  if (remainder === 0) {
    return Math.min(num1, num2);
  }
  while (remainder >= 0) {
    numLeft = numRight;
    numRight = remainder;
    quotient = Math.floor(numLeft / numRight);
    if (numLeft - quotient * numRight === 0) {
      return remainder;
    }
    remainder = numLeft - quotient * numRight;
  }
}
