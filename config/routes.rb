Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :products, only: [:index, :show] do
      get "search", on: :collection
      resources :reviews, only: [:index]
    end
    resources :cart_items
    resources :reviews
  end

end
