Rails.application.routes.draw do
  root to: "pages#index"
  resources :locations
  get '/restaurants', to: 'restaurants#restaurants' 
  get "*path", to: "pages#index", constraints: { format: "html" }
end
