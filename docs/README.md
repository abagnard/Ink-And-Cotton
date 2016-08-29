#Minimum Viable Product
---
Ink and Cotton is a web application inspired by Paper and Fabric build using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:
* Hosting on `Heroku`
* `New account creation`, `login`, and `guest/demo` login
* `Products` Views (all, artist, ink, cotton, item)
* `Reviews` (view, create)
* `Cart` (update, checkout)
* `Search`
* Production `README`
* BONUS: grid/stream view
* BONUS: favorites

#Design Docs
---
* [View Wireframes](https://github.com/abagnard/Ink-And-Cotton/tree/master/docs/wireframes)
* [React Components](component-heirarchy.md)
* [API endpoints](api-endpoints.md)
* [DB Schema](schema.md)
* [Redux Structure](redux-structure.md)
* [Sample State](sample-state.md)


#Implementation Timeline
---

##Phase 1: Backend setup and Front End User Authentication (2 days)
###Objective: Functioning rails project with front-end Authentication
* New Rails project
* `User` model/migration
* Back end authentication (session/password)
* `StaticPages` controller and root view
* Webpack & react/redux modules
* `APIUtil` to interact with the API
* Redux cycle for frontend authentication
* User signup/signin components
* Blank landing component after signup/signin
* Style signup/signin components
* Seed users

##Phase 2: Products Model, API, and components (2 days)
###Objective: Products can be viewed through the API.
*  `Products` model
*  CRUD API for Products (`ProductsController`)
*  seed 1 ink and 1 cotton from one artist
*  JBuilder views for Products
*  Product components and respective Redux loops
    *  `ProductsIndex`
        *  `ProductsIndexItem`
            *  `InkIndex`
                *  `InkIndexItem`
            *  `CottonIndex`
                *  `CottonIndexItem`
*  `Product actions`
*  `Product util (AJAX)`
*  `ProductsReducer`
*  `ProductsMiddleware`
*  Style Product Show Component
*  Seed Products

##WEEKEND: CSS - homepage, artist, ink, cotton (2 days)
###Objective: Visually make sure all these pages are looking good and setup properly
*  Homepage
    *  NavBar - img, login link, home button, cart button, searchbar
    *  Footer - links
    *  InkIndex
    *  CottonIndex
* Artist List Page
    * Header
    * links to Artists' Page
* Artist Page
    *  ProductItem/:artist_id
    *  links to all/ink/cotton
*  Ink / Cotton Pages
    *  InkIndex
    *  CottonIndex
    *  UL for all ProductItems

##Phase 3: Reviews (1 day)
####Objective: Reviews belong to Product Item and can be created.
*  `Reviews` model
*  CRUD API for Reviews (`ReviewsController`)
*  Seed database with a small amount of test data
*  JBuilder views for reviews
*  Review components and respective Redux loops
    *  `ReviewsIndex`
    *  `ReviewsIndexItem`
*  `Reviews actions`
*  `Reviews util (AJAX)`
*  `ReviewsReducer`
*  `ReviewsMiddleware`
*  Style review components
*  Seed reviews

##Phase 5: CartItems (2 days)
####Objective: Cart can be updated (change quantity of item and remove item option). Checkout button
*  `CartItems` model
*  CRUD API for Carts (`CartItemsController`)
*  JBuilder views for carts
*  Cart components and respective Redux loops
    *  `CartItemsIndex`
    *  `CartItemsIndexItem`
*  `CartItems actions`
*  `CartItems util (AJAX)`
*  `CartItemsReducer`
*  `CartItemsMiddleware`
*  Style CartItems components
*  Seed CartItems

##Phase 6: Search (1 day)
####Objective: Search bar provides search results
<!-- not sure exactly what needs to be done here.... -->
