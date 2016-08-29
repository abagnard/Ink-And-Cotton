#Component Heirarchy

AuthFormContainer
  AuthForm

HomeContainer
  Header
  Home

ProductsContainer
  ProductsHeader
  ProductsIndex

ReviewsContainer
  NewReview
  ProductsIndex
  CreateReviewButton

CartContainer
  CartIndex
  ProductsIndex
  CheckOutButton

SearchResultsContainer
  Search
  ProductsIndex
  ProductSearchBar

ProductsIndex
  ProductDetails
  LinkToArtist
  AddToCartButton





Routes

"/sign-up"                      AuthFormContainer
"/sign-in"                      AuthFormContainer
"/home"                         HomeContainer
"/home/products"                ProductsContainer
"/home/products/:type_name"     ProductsContainer
"/home/products/:artist_id"     ProductsContainer
"/home/products/:id"            ProductsContainer
"/home/cart"                    CartContainer
"/home/search-results"          SearchResultsContainer
