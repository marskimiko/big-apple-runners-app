Rails.application.routes.draw do

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  # post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/routes/:route_id', to: 'reviews#create'
  # post '/routes', to: 'routes#create'
  # patch '/routes/:route_id', to: 'reviews#update'

  # post '/routes/:route_id/reviews', to: 'reviews#create'

  # will have full crud
  resources :users, only: [:index, :create, :show]
  resources :reviews
  resources :routes, only: [:index, :show, :create]

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
