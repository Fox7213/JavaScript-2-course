import  validateCVV  from './validate';

describe('validateCVV', () => {
  it('Валидация CVV/CVC пропускает строку с тремя цифровыми символами', () => {
    const validNumber = '4242 4242 4242 4242';
    expect(validateCVV(validNumber, '123')).toBe(true);
  });
});

describe('validateCVV', () => {
  it('Валидация CVV/CVC не пропускает строки с 1-2 цифровыми символами', () => {
    const validNumber = '4242 4242 4242 4242';
    expect(validateCVV(validNumber, '1')).toBe(false);
    expect(validateCVV(validNumber, '12')).toBe(false);
  });
});

describe('validateCVV', () => {
  it('Валидация CVV/CVC не пропускает строки с 4+ цифровыми символами.', () => {
    const validNumber = '4242 4242 4242 4242';
    expect(validateCVV(validNumber, '1234')).toBe(false);
  });
});

//Task B

describe('validateCVV', () => {
  it('Валидация номера карты не пропускает некорректный номер карты', () => {
    const validNumber = '4242 4242 4242 4242';
    expect(validateCVV(validNumber, '1234')).toBe(false);
  });
});

describe('validateCVV', () => {
  it('Валидация номера карты не пропускает произвольную строку, содержащую любые нецифровые символы', () => {
    const validNumber = '4242 4242 4242 4242';
    expect(validateCVV(validNumber, '1234')).toBe(false);
  });
});

describe('validateCVV', () => {
  it('Валидация номера карты не пропускает строку с недостаточным количеством цифр', () => {
    const validNumber = '4242 4242 4242 4242';
    expect(validateCVV(validNumber, '1234')).toBe(false);
  });
});

describe('validateCVV', () => {
  it('Валидация номера карты не пропускает строку со слишком большим количеством цифр.', () => {
    const validNumber = '4242 4242 4242 4242';
    expect(validateCVV(validNumber, '1234')).toBe(false);
  });
});