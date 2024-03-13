import { isSecurityCodeValid, isValid } from 'creditcard.js';

export default function validateCVV(cardNumber, CVVNumber) {
  return isSecurityCodeValid(cardNumber, CVVNumber) === true;
}


export default function validateCreditCardNum(cardNumber){
  return isValid(cardNumber) === true;
}

export default function validateCreditCard(cardNumber) {
  return isValid(cardNumber) === true;
}

//Task B

export default function validateCardNumber(cardNumber) {
  const formattedCardNumber = cardNumber.replace(/\s/g, '');//удаление пробелов
  if (!/^\d+$/.test(formattedCardNumber)) {//только числа
    return false;
  }
}

export default function validateCardNumber(cardNumber) {//числа
  if (!/^\d+$/.test(formattedCardNumber)) {
    return false;
  }
}

export default function validateCardmilen(cardNumber) {//длина меньше
  if (formattedCardNumber.length < 12) {
    return false;
  }
}

export default function validateCardmalen(cardNumber) {//длина больше
  if (formattedCardNumber.length > 19) {
    return false;
  }
}
