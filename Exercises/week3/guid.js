function generateRandomNumber(min, max) {
  const number = Math.round(min + Math.random() * (max - min));
  return number;
}

function generateGUID(count, strong = false) {
  const defaultChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const strongChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\\:;?><,./-=';
  const characters = strong ? strongChars : defaultChars;
  let output = '';
  for (let i = 0, n = characters.length; i < count; i++) {
    output += characters.charAt(Math.floor(Math.random() * n));
  }
  return output;
}

console.log(`Default/non special characters password, 8 characters: "${generateGUID(8)}"`);
console.log(`Default/non special characters password, 16 characters: "${generateGUID(16)}"`);
console.log(`Strong/added special characters password, 32 characters: "${generateGUID(32, true)}"`);
console.log(`Strong/added special characters password, 128 characters: "${generateGUID(128, true)}"`);