#Minimum Viable Product
---
Ink and Cotton is a web application inspired by Paper and Fabric build using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:
* Hosting on `Heroku`
* `New account creation`, `login`, and `guest/demo` login
* `Products` Lists (ink, cotton, artist, all)
* Individual product view
* `Reviews`
* `Cart` (checkout, update)
* `Search`
* Production `README`
* BONUS: Tags/Filter
* BONUS: Favorites

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

##Phase 2: Products (and Types) Model, API, and components (2 days)
###Objective: Products can be viewed through the API.
*  `Products` model
*  CRUD API for Products (`ProductsController`)
*  seed 1 ink and 1 cotton from one artist
*  JBuilder views for Products
*  Product components and respective Redux loops
    *  Product actions
    *  Product AJAX
*  `ProductsReducer`
*  `ProductsMiddleware`
*  ProductsIndex
*  ProductForm
*  Style Product Item View
*  Seed Products

##Phase 3: CSS - homepage, artist, ink, cotton (2 days)
###Objective: Visually make sure all these pages are looking good and setup properly
*  Homepage
    *  Header - img, login link, home button, cart button, searchbar
    *  Footer - links
    *  New Ink / New Cotton Headers
    *  UL for Product Items
*  Artist Page
    *  Header
    *  UL for Product Items
    *  links to all/ink/cotton
*  Ink / Cotton Pages
    *  Header
    *  UL for Product Items

##Phase 4: Reviews (1 day)
####Objective: Reviews belong to Product Item and can be created.
*  `Reviews` model
*  CRUD API for Reviews (`ReviewsController`)
*  Seed database with a small amount of test data
*  JBuilder views for reviews
*  Review components and respective Redux loops
    *  Review actions
    *  Review AJAX
*  Reviews Reducer
*  Reviews Middleware
*  Style review components
*  Seed reviews

##Phase 5: Cart (2 days)
####Objective: Cart can be updated (change quantity of item and remove item option). Checkout button
*  `Carts` model
*  CRUD API for Carts (`CartsController`)
*  JBuilder views for carts
*  Cart components and respective Redux loops
    *  Cart actions
    *  Cart AJAX
*  Carts Reducer
*  Carts Middleware
*  Style cart components
*  Seed carts

##Phase 6: Search (1 day)
####Objective: Search bar provides search results
<!-- not sure exactly what needs to be done here.... -->
