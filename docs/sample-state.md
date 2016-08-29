``` json
{
  currentUser: {
    id: 1,
    username: "app-academy",
    name: "App Academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    checkout: {errors: ["your cart is empty...nothing to checkout"]}
  },
  products: {
    1: {
      artist_id: 2,
      title: "Blue Shine",
      type: "ink",
      in_stock: true,
      description: "Giclee print on premium, museum quality, archival paper. 300gsm. 100% cotton. 11"x17". Limited edition, signed set of 50. Available framed or unframed.",
      price: 150,
      img_url: " "
    },
    2: {
      artist_id: 2,
      title: "Wanderlust",
      type: "ink",
      in_stock: true,
      description: "Giclee print on premium, museum quality, archival paper. 11"x17". Limited edition, signed set of 50. Available framed or unframed.",
      price: 100,
      img_url: ""
    },
    3: {
      artist_id: 3,
      title: "Love Me Anyways Muscle Tank Top",
      type: "cotton",
      in_stock: true,
      description: "The Love Me Anyways street art on a super soft, textured, black muscle tank top.",
      price: 30,
      img_url: ""
    }
  },
  cart_items: {
    1: {
      user_id: 1,
      product_id: 1,
      quantity: 1
    },
    2: {
      user_id: 1,
      product_id: 3,
      quantity: 1
    }
  },
  reviews: {
    1: {
      user_id: 2,
      product_id: 2,
      rating: 5,
      title: "Must buy!",
      comment: "Great print with amazing attention to detail! Love it!"
    },
    2: {
      user_id: 1,
      product_id: 3,
      rating: 1,
      title: "Wierd Sizing",
      comment: "Sizing was messed up, but the fabric is super soft! Wish it fit better."
    }
  }
}

```
