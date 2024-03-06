const xChars = (limit) => (file) => {
  file.excerpt = file.content.slice(0, limit);
};

const xLines = (limit) => (file) => {
  file.excerpt = file.content.split("\n").slice(0, limit).join(" ");
};

export default xChars;

export const lines5 = xLines(5);
export const chars200 = xChars(200);
export const chars100 = xChars(100);
