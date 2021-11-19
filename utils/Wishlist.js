const toggleWishlist = (product, dispatch, setWishlist) => {
  var products = JSON.parse(localStorage.getItem("wishlist")) || [];
  let indexOfExistingProduct = products.findIndex((el) => el.id === product.id);
  console.log('%cWishlist.js line:4 "aa"', "color: #007acc;", "aa");
  if (indexOfExistingProduct !== -1) {
    products = products.filter((item) => item.id != product.id);
  } else {
    products.push(product);
  }
  localStorage.setItem("wishlist", JSON.stringify(products));
  dispatch(setWishlist(products));
};

const isInWishlist = (product) => {
  var products = JSON.parse(localStorage.getItem("wishlist")) || [];
  let indexOfExistingProduct = products.findIndex((el) => el.id === product.id);

  if (indexOfExistingProduct !== -1) {
    return "Enlever du panier";
  } else {
    return "Ajouter au panier";
  }
};

export { toggleWishlist, isInWishlist };
