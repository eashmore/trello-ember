Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users
  resources :sessions
end
