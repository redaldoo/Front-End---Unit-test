const addToCart = (product) => {
  var products = JSON.parse(localStorage.getItem("cart")) || [];
  let indexOfExistingProduct = products.findIndex((el) => el.id === product.id);

  if (indexOfExistingProduct !== -1) {
    console.log("here");
  } else {
    // product.total = product.quantity * product.price;
    products.push(product);
  }

  // let nombre = products.reduce((total, item) => total + item.quantity, 0);
  // let total = products.reduce(
  //   (total, item) => total + item.quantity * item.price,
  //   0
  // );

  localStorage.setItem("cart", JSON.stringify(products));
};

const removeFromCart = (product, dispatch, setProduct) => {
  console.log("%cCart.js line:22 product", "color: #007acc;", product);
  var products = JSON.parse(localStorage.getItem("cart")) || [];
  const filteredCard = products.filter((item) => {
    return item.id !== product.id;
  });
  localStorage.setItem("cart", JSON.stringify(filteredCard));
  // const dispatch = useDispatch();
  dispatch(setProduct(filteredCard));
};

const getCart = () => {
  let products = JSON.parse(localStorage.getItem("cart")) || [];
  return products;
};

const isInCart = (product) => {
  var products = JSON.parse(localStorage.getItem("cart")) || [];
  let indexOfExistingProduct = products.findIndex((el) => el.id === product.id);

  if (indexOfExistingProduct !== -1) {
    return "Enlever du panier";
  } else {
    return "Ajouter au panier";
  }
};

export { addToCart, getCart, removeFromCart, isInCart };
