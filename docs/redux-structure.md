#Auth Cycles
---
##Session API Request Actions
* signUp
    1. invoked from SignupForm onSubmit
    2. POST /api/users is called.
    3. receiveCurrentUser is set as the success callback.
* logIn
  1. invoked from LoginForm onSubmit
  2. POST /api/session is called.
  3. receiveCurrentUser is set as the callback.
* logOut
  1. invoked from Navbar onClick
  2. DELETE /api/session is called.
  3. removeCurrentUser is set as the success callback.
* fetchCurrentUser
  1. invoked from App in didMount
  2. GET /api/session is called.
  3. receiveCurrentUser is set as the success callback.

##Session API Response Actions
* receiveCurrentUser
  1. invoked from an API callback
  2. the SessionReducer stores currentUser in the application's state.
* removeCurrentUser
  1. invoked from an API callback
  2. the SessionReducer removes currentUser from the application's state.


#Error Cycles
---
##Error API Response Actions
* setErrors
  1. invoked from API callbacks on error for actions that generate POST requests
  2. the ErrorReducer stores the form in the application's state; errors are mapped to their respective forms
* clearErrors
  1. invoked from API callbacks on success for actions that generate POST requests
  2. the ErrorReducer removes errors for a given form in the application's state.


#Product Cycles
---
##Products API Request Actions
* fetchAllProducts
  1. invoked from ProductsIndex
  2. GET /api/products is called.
  3. receiveAllProducts is set as the success callback.

* fetchTypeProducts
  1. invoked from ProductsIndex
  2. GET /api/product_types/:id
  3. receiveTypeProducts is set as the success callback.

* fetchSingleProduct
  1. invoked from ProductDetail
  2. GET /api/products/:id is called.
  3. receiveSingleProduct is set as the success callback.

* destroyProduct
  1. invoked from delete item button onClick
  2. DELETE /api/products/:id is called.
  3. removeProduct is set as the success callback.


##Products API Response Actions
* receiveAllProducts
  1. invoked from an API callback
  2. the ProductsReducer updates products in the application's state.

* receiveTypeProducts
  1. invoked from an API callback
  2. the ProductsReducer updates products in the application's state.

* receiveSingleProduct
  1. invoked from an API callback
  2. the ProductsReducer updates notes[id] in the application's state.

* removeProduct
  1. invoked from an API callback
  2. the ProductReducer removes notes[id] from the application's state.


#Cart Cycles
---
##Cart API Request Actions
* fetchAllCartItems
  1. invoked from CartIndex
  2. GET /api/cart_items is called.
  3. receiveAllCartItems is set as the success callback.

* fetchSingleCartItem
  1. invoked from ProductDetails
  2. GET /api/products/:id is called.
  3. receiveSingleProduct is set as the success callback.

* updateCartItem
  1. invoked from CartForm on onSubmit
  2. PATCH api/cart_items/:id is called.
  3. receiveSingleCartItem is set as success callback.

* destroyCartItem
  1. invoked from delete product item button onClick
  2. DELETE /api/cart_items/:id is called.
  3. removeCartItem is set as the success callback.

##Cart API Response Actions
* receiveAllCartItems
  1. invoked from an API callback.
  2. The CartItemsReducer updates CartItems in the application's state.

* receiveSingleCartItem
  1. invoked from an API callback.
  2. The CartItemReducer updates cart_item[id] in the application's state.

* removeCartItem
  1. invoked from an API callback
  2. the CartItemsReducer removes cart_item[id] from the application's state.



#REVIEW CYCLES
---
##Reviews API Request Actions
* fetchAllReviews
  1. invoked from ProductsIndex
  2. GET /api/reviews is called.
  3. receiveAllReviews is set as the success callback.

* createReview
  1. invoked from create review button onClick
  2. POST /api/reviews is called.
  3. receiveSingleReview is set as the callback.

##Reviews API Response Actions
* receiveAllReviews
  1. invoked from an API callback.
  2. The Reviews reducer updates reviews in the application's state.

* receiveSingleReview
  1. invoked from an API callback.
  2. The Reviews reducer updates review[id] in the application's state.


#SearchSuggestion Cycles
---
* fetchSearchSuggestions
  1. invoked from ProductSearchBar onChange when there is text
  2. GET /api/products is called with text param.
  3. receiveSearchSuggestions is set as the success callback.

* receiveSearchSuggestions
  1. invoked from an API callback.
  2. The SearchSuggestion reducer updates suggestions in the application's state.

* clearSearchSuggestions
  1. invoked from ProductSearchBar onChange when empty
  2. The SearchSuggestion reducer resets suggestions in the application's state.
