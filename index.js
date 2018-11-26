function randItem(
  list = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split(
    ""
  )
) {
  return list[parseInt(Math.random() * list.length)];
}

function randWord(length = 5) {
  let word = [];
  for (let i = 0; i < length; i++) {
    word.push(randItem());
  }
  return word.join("");
}

module.exports = {
  randItem,
  randWord
};
