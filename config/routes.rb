TrelloClone::Application.routes.draw do
  root to: "static_pages#root"

  resources :users
  resources :sessions

  namespace :api, defaults: { format: :json } do
    resources :boards, except: [:new, :edit]
    resources :lists, only: [:create, :show, :update, :destroy]
    resources :cards, only: [:create, :update, :destroy]

    # resources :items
    # resources :board_memberships
    # resources :card_assignments
  end

  match "/boards/:all" => "static_pages#root", via: [:get, :post]
  match "/lists/:all" => "static_pages#root", via: [:get, :post]
  match "/cards/:all" => "static_pages#root", via: [:get, :post]
end
