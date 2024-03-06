const romanize = (num: number) => {
  if (isNaN(num)) return NaN;
  let digits = String(num).split(""),
    key = [
      "",
      "C",
      "CC",
      "CCC",
      "CD",
      "D",
      "DC",
      "DCC",
      "DCCC",
      "CM",
      "",
      "X",
      "XX",
      "XXX",
      "XL",
      "L",
      "LX",
      "LXX",
      "LXXX",
      "XC",
      "",
      "I",
      "II",
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX",
    ],
    roman = "",
    i = 3;
  if (!digits || digits === undefined) return null;
  while (i--) roman = (key[+(digits.pop() ?? 0) + i * 10] || "") + roman;
  return Array(+digits.join("") + 1).join("M") + roman;
};

export default romanize;
