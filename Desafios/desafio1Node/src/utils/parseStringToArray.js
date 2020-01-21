function parseStringToArray(string) {
  const arry = string.split(",").map(element => {
    return element.trim();
  });
  return arry;
}

module.exports = { parseStringToArray };
