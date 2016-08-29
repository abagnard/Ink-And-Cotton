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





<!-- PRESENTATIONAL COMPONENT HEIRACRY

AuthFormContainer
	AuthForm

HomeContainer
	Header
	Nav Bar
	Header – new ink
		ProductIndex
	Header – new cotton
	ProductIndex

ProductsContainer
	Header
	Nav Bar
	ProductsHeader
	ProductsIndex

ItemContainer
	Header
	Nav Bar
	ItemIndex
		ItemImg
		ItemDetail
		OptionSelector
	ReviewsIndex
		ReviewsDetail
		AddReview Button

AddToCart Button
	Prev/Next Links

CartContainer
	Header
	Nav Bar
Cart Index
-	Cart item -->
