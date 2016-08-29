outline the architecture,
show wireframes,
describe features, and
outline a development timeline for your application.


#Minimum Viable Product
Ink and Cotton is a web application inspired by Paper and Fabric build using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:
•	 Hosting on Heroku
•	 New account creation, login, and guest/demo login
•	 Products Lists (ink, cotton, artist, all)
•	 Individual product view
•	 Comments/Reviews
•  Cart (checkout, update)
•	 Search
•	 Production README
•	 BONUS: Tags/Filter
•	 BONUS: Favorites

#Design Docs
•	 View Wireframes
•	 React Components
•	 API endpoints
•	 DB schema
•	 Redux Structure
•	 Sample State

#Implementation Timeline

#Phase 1: Backend setup and Front End User Authentication (2 days)
Objective: Functioning rails project with front-end Authentication
•	 New Rails project
•	 User model/migration
•	 Back end authentication (session/password)
•	 StaticPages controller and root view
•	 Webpack & react/redux modules
•	 APIUtil to interact with the API
•	 Redux cycle for frontend authentication
•	 User signup/signin components
•	 Blank landing component after signup/signin
•	 Style signup/signin components
•	 Seed users

#Phase 2: Products Model, API, and components (2 days)
Objective: Products can be viewed through the API.
•	  Products model
•	  Seed database with a small amount of test data
•	  CRUD API for Products (ProductsController)
•	  JBuilder views for Products
•	  Product components and respective Redux loops
•	  ProductsIndex
•	  ProductForm
•	  Style Products components
•	  Seed Products

#Phase 3: Reviews (2 day)
Objective: Reviews belong to Product Item and can be created.
•	  Reviews model
•	  Seed database with a small amount of test data
•	  CRUD API for Reviews (ReviewsController)
•	  JBuilder views for reviews
•	  Adding reviews
•	  Style review components
•	  Seed reviews

#Phase 4: Cart (2 days)
Objective: Cart can be updated (change quantity of item and remove item option). Checkout button
•	  Cart model
•	  Update cart
•	  Checkout Button
•	  Seed tags with seed data

<!-- #Phase 5: Allow Complex Styling in Notes (1 days, W2 Th 6pm)
objective: Allow rich text editing of notes.
•	  Integrate react-quill (based on Quill.js).
•	  Rails helpers to sanitize HTML before rendering.
•	  Style Quill components.
•	  Add Quill styling to seeded notes

#Phase 6: - Pagination / infinite scroll for Notes Index (1 day, W2 F 6pm)
objective: Add infinite scroll to Notes Index
•	  Paginate Notes Index API to send 20 results at a time
•	  Append next set of results when user scrolls and is near bottom
•	  Style scroll components and transitions
•	  Ensure seed data demonstrates infinite scroll

#Bonus Features (TBD)
•	  Search notes by content
•	  Set reminders on notes
•	  Changelogs for Notes
•	  Multiple sessions -->
