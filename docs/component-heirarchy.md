#Routes
---
| Path                           | Component              |
| ------------------------------ |-----------------------:|
|"/sign-up"                      | AuthFormContainer      |
|"/sign-in"                      | AuthFormContainer      |
|"/home"                         | NavBarContainer        |
|"/home/products"                | ProductsContainer      |
|"/home/products/:type_name"     | ProductsContainer      |
|"/home/products/:artist_id"     | ProductsContainer      |
|"/home/products/:id"            | ProductsContainer      |
|"/home/cart"                    | CartContainer          |
|"/home/search-results"          | SearchResultsContainer |

#Component Heirarchy
---

**AuthFormContainer**
  * AuthForm

**NavBarContainer**
  * Header/NavBar
  * ProductsIndex
    * InkIndex
        * InkIndexItem
    * CottonIndex
        * CottonIndexItem
  * Footer

**ProductsContainer**
  * ProductsIndex
      * ProductsIndexItem
  * InkIndex
      * InkIndexItem
  * CottonIndex
      * CottonIndexItem

**ReviewsContainer**
  * ReviewIndex
  * ReviewIndexItem
  * CreateReviewButton

**CartContainer**
  * CartItemsIndex
  * CartItemsIndexItem

**SearchResultsContainer**
  * SearchAutoComplete
  * SearchAutoResults


#Files Needed
---
##**ONE OF EACH**
  1. Store
  2. MasterMiddleware
  3. MasterReducer
  4. Entry

##**PRODUCTS**
  1. ProductsIndex
    * presentational component
    * box/container that holds ALL items
    * passes props to each item
  2. ProductsIndexItem
    * stateless component
    * a single product
  3. ProductsReducer
  4. ProductsMiddleware
  5. ProductsComponentContainer
    * MSTP / MDTP
  6. ProductsActions
  7. ProductsUtil
  8. ProductsShowComponent
    * form that will display individual products

##**INKS**
  1. InkIndex
  2. InkIndexItem

##**COTTONS**
  1. CottonIndex
  2. CottonIndexItem

##**REVIEWS**
  1. ReviewsIndex
  2. ReviewsIndexItem
  3. ReviewsReducer
  4. ReviewsMiddleware
  5. ReviewsComponentContainer
    * MSTP / MDTP
  6. ReviewsActions
  7. ReviewsUtil

##**CART_ITEMS**
  1. CartItemsIndex
  2. CartItemsIndexItem
  3. CartItemsReducer
  4. CartItemsMiddleware
  5. CartItemsComponentContainer
    * MSTP / MDTP
  6. CartItemsActions
  7. CartItemsUtil
