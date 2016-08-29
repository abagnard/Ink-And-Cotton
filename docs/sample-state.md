{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    checkout: {errors: ["your cart is empty...nothing to checkout"]}
  },
  product_types: {
    1: {
      type: "ink",
      products: {
        1: {
          artist_id: 2,
          title: "Blue Shine",
          in_stock: true,
          description: "Giclee print on premium, museum quality, archival paper. 300gsm. 100% cotton. 11"x17". Limited edition, signed set of 50. Available framed or unframed.",
          price: 150,
        },
        2: {
          artist_id: 2,
          title: "Wanderlust",
          in_stock: true,
          description: "Giclee print on premium, museum quality, archival paper. 11"x17". Limited edition, signed set of 50. Available framed or unframed.",
          price: 100,
        }
      }
    },
    2: {
      type: "cotton",
      products: {
        3: {
          artist_id: 3,
          title: "Love Me Anyways Muscle Tank Top",
          in_stock: true,
          description: "The Love Me Anyways street art on a super soft, textured, black muscle tank top.",
          price: 30,
        }
      }
    }
  },
  cart: {
    user_id: 1,
  },
  cart_items {
    1: {
      cart_id: 1,
      product_id: 1,
      quantity: 1,
      option: "framed"
    },
    2: {
      cart_id: 1,
      product_id: 3,
      quantity: 1,
      option: "small"
    }
  },
  reviews: {
    1: {
      user_id: 2,
      product_id: 2,
      rating: 5,
      comment: "Great print with amazing attention to detail! Love it!"
    },
    2: {
      user_id: 1,
      product_id: 3,
      rating: 1,
      comment: "Sizing was messed up, but the fabric is super soft! Wish it fit better."
    }
  }
}
