export const randomizeCardId = () => {
  const char = "AZERTYUIOPQSDFGHJKGHJKLMWXCVBN";
  const num = "0123456789";

  let str = "KJ";

  for (let i = 0; i < 7; i++) {
    if (i < 4) {
      str += char[Math.floor(Math.random() * char.length)];
    } else {
      str += num[Math.floor(Math.random() * num.length)];
    }
  }

  return str;
};

export const validateCardId = (id) => {
  let regexp = /^KJ[A-Z]{4}[0-9]{3}$/;
  return regexp.test(id);
};
