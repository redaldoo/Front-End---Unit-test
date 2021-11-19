const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function CreateStripeSession(req, res) {
  const { items, userEmail } = req.body;
  console.log(process.env.STRIPE_SECRET_KEY);
  // const redirectURL = "http://localhost:3000";
  const redirectURL = "https://try-n-buy.herokuapp.com/";
  // process.env.NODE_ENV === "development"
  //   ? "http://localhost:3000"
  //   : "https://stripe-checkout-next-js-demo.vercel.app";

  // items: [
  // 	...this.products.map((item) => {
  // 		return {
  // 			price_data: {
  // 				currency: "eur",
  // 				product_data: {
  // 					name: item.title,
  // 					images: [item.imgUrl],
  // 				},
  // 				unit_amount: item.total * 100,
  // 			},
  // 			quantity: 1,
  // 		};
  // 	}),
  // 	{
  // 		price_data: {
  // 			currency: "eur",
  // 			product_data: {
  // 				name: "Livraison",
  // 				images: [],
  // 			},
  // 			unit_amount: 2000,
  // 		},
  // 		quantity: 1,
  // 	},
  // ],

  const transformedItem = items.map((item) => {
    return {
      price_data: {
        currency: "eur",
        product_data: {
          name: item.name,
          images: [item.image],
        },
        unit_amount: item.price * 100,
      },
      quantity: 1,
    };
  });
  // {
  //   price_data: {
  //     currency: "eur",
  //     product_data: {
  //       images: [item.image],
  //       name: item.name,
  //     },
  //     unit_amount: item.price * 100,
  //   },
  //   // description: item.description,
  //   quantity: 1,
  // };

  console.log(
    "%ccreate-stripe-session.js line:24 transformedItem",
    "color: #007acc;",
    transformedItem
  );

  const session = await stripe.checkout.sessions.create({
    customer_email: userEmail,
    payment_method_types: ["card"],
    line_items: transformedItem,
    mode: "payment",
    success_url: redirectURL + "/success?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: redirectURL + "/cart",
    // metadata: {
    //   images: item.image,
    // },
  });

  res.json({ id: session.id });
}

export default CreateStripeSession;
