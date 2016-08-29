
<!-- AUTH CYCLES -->

Session API Request Actions
#signUp
  invoked from SignupForm onSubmit
  POST /api/users is called.
  receiveCurrentUser is set as the success callback.
#logIn
  invoked from LoginForm onSubmit
  POST /api/session is called.
  receiveCurrentUser is set as the callback.
#logOut
  invoked from Navbar onClick
  DELETE /api/session is called.
  removeCurrentUser is set as the success callback.
#fetchCurrentUser
  invoked from App in didMount
  GET /api/session is called.
  receiveCurrentUser is set as the success callback.

Session API Response Actions
#receiveCurrentUser
  invoked from an API callback
  the SessionReducer stores currentUser in the application's state.
#removeCurrentUser
  invoked from an API callback
  the SessionReducer removes currentUser from the application's state.


<!-- ERROR CYCLES -->

Error API Response Actions
#setErrors
  invoked from API callbacks on error for actions that generate POST requests
  the ErrorReducer stores the form in the application's state; errors are mapped to their respective forms
#clearErrors
  invoked from API callbacks on success for actions that generate POST requests
  the ErrorReducer removes errors for a given form in the application's state.


<!-- PRODUCTS CYCLES -->

Products API Request Actions
#fetchAllProducts
  invoked from ProductsIndex
  GET /api/products is called.
  receiveAllProducts is set as the success callback.

#fetchTypeProducts
  invoked from ProductsIndex
  GET /api/product_types/:id
  receiveTypeProducts is set as the success callback.

#fetchSingleProduct
  invoked from ProductDetail
  GET /api/products/:id is called.
  receiveSingleProduct is set as the success callback.

#destroyProduct
  invoked from delete item button onClick
  DELETE /api/products/:id is called.
  removeProduct is set as the success callback.


Products API Response Actions
#receiveAllProducts
  invoked from an API callback
  the ProductsReducer updates products in the application's state.

#receiveTypeProducts
  invoked from an API callback
  the ProductsReducer updates products in the application's state.

#receiveSingleProduct
  invoked from an API callback
  the ProductsReducer updates notes[id] in the application's state.

#removeProduct
  invoked from an API callback
  the ProductReducer removes notes[id] from the application's state.


<!-- CART CYCLES -->

Cart API Request Actions
#fetchAllCartItems
  invoked from CartIndex
  GET /api/cart_items is called.
  receiveAllCartItems is set as the success callback.

#fetchSingleCartItem
  invoked from ProductDetails
  GET /api/products/:id is called.
  receiveSingleProduct is set as the success callback.

#updateCartItem
  invoked from CartForm on onSubmit
  PATCH api/cart_items/:id is called.
  receiveSingleCartItem is set as success callback.

#destroyCartItem
  invoked from delete product item button onClick
  DELETE /api/cart_items/:id is called.
  removeCartItem is set as the success callback.

Cart API Response Actions
#receiveAllCartItems
  invoked from an API callback.
  The CartItemsReducer updates CartItems in the application's state.

#receiveSingleCartItem
  invoked from an API callback.
  The CartItemReducer updates cart_item[id] in the application's state.

#removeCartItem
  invoked from an API callback
  the CartItemsReducer removes cart_item[id] from the application's state.



<!-- REVIEWS CYCLES -->
Reviews API Request Actions
#fetchAllReviews
  invoked from ProductsIndex
  GET /api/reviews is called.
  receiveAllReviews is set as the success callback.

#createReview
  invoked from create review button onClick
  POST /api/reviews is called.
  receiveSingleReview is set as the callback.

Reviews API Response Actions
#receiveAllReviews
  invoked from an API callback.
  The Reviews reducer updates reviews in the application's state.

#receiveSingleReview
  invoked from an API callback.
  The Reviews reducer updates review[id] in the application's state.


SearchSuggestion Cycles

#fetchSearchSuggestions
invoked from ProductSearchBar onChange when there is text
GET /api/products is called with text param.
receiveSearchSuggestions is set as the success callback.

#receiveSearchSuggestions
invoked from an API callback.
The SearchSuggestion reducer updates suggestions in the application's state.

#clearSearchSuggestions
invoked from ProductSearchBar onChange when empty
The SearchSuggestion reducer resets suggestions in the application's state.
