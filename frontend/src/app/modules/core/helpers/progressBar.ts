const strengthStatus: { [key: number]: string } = {
  1: 'słabe',
  2: 'średnie',
  3: 'mocne',
};

export const getPasswordStrength = (password: string, strengthValue: any) => {
  strengthValue.upper = /[A-Z]/.test(password);
  strengthValue.lower = /[a-z]/.test(password);
  strengthValue.numbers = /\d/.test(password);

  let strengthIndicator = 0;

  for (let metric in strengthValue) {
    if (strengthValue[metric] === true) {
      strengthIndicator++;
    }
  }

  return strengthStatus[strengthIndicator] ?? '';
};

export const getStrength = (password: string) => {
  let strengthValue = {
    upper: false,
    numbers: false,
    lower: false,
  };

  return getPasswordStrength(password, strengthValue);
};
