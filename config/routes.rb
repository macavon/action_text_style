Rails.application.routes.draw do
  resources :notes
  root :to => 'notes#index'
end
