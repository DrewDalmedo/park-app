Rails.application.routes.draw do
  resources :users, only: [:index, :create, :show]
  #resources :parks
  resources :states, only: [:index, :show, :create, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
