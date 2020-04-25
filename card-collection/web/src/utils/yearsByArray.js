export const yearsByArray = () => {
  const now = new Date().getUTCFullYear();
  const firstCardYear = 1886;
  const range = now - firstCardYear + 1;
  const years = Array(now - (now - range)).fill('').map((v, idx) => now - idx);
  return years;
}


