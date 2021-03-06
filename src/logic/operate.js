import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const firstNumber = Big(numberOne);
  const secondNumber = Big(numberTwo);

  let result;

  switch (operation) {
    case '+':
      result = firstNumber.plus(secondNumber);
      break;
    case '-':
      result = firstNumber.minus(secondNumber);
      break;
    case 'x':
      result = firstNumber.times(secondNumber);
      break;
    case '÷':
      result = firstNumber.div(secondNumber);
      break;
    case '%':
      result = firstNumber.times(secondNumber) / 100;
      break;
    default:
      return -1;
  }
  return result.toString();
};

export default operate;
