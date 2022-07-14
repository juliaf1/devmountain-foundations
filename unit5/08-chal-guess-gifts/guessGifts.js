const guessGifts = (wishlist, presents) => {
  let guesses = [];
  presents.forEach(present => {
    let options = wishlist.filter(wishlistGift => {
      return wishlistGift.size == present.size && wishlistGift.clatters == present.clatters && wishlistGift.weight == present.weight;
    });
    options = options.map(option => option.name);
    guesses.push(options);
  });
  guesses = [...new Set(guesses)];
  return guesses.flat();
};

// Possible values for size: “small”, “medium”, “large”
// Possible values for clatters: “no”, “a bit”, “yes”
// Possible values for weight: “light”, “medium”, “heavy”

// Don’t add any item more than once to the result
// The order of names in the output doesn’t matter
// It’s possible, that multiple items from your wish list have the same attribute values. If they match the attributes of one of the presents, add all of them.

const wishlist = [
  {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
  {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
  {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

const presents = [
  {size: "medium", clatters: "a bit", weight: "medium"},
  {size: "small", clatters: "yes", weight: "light"}
];

console.log(guessGifts(wishlist, presents)); // must return ["Toy Car", "Mini Puzzle"]