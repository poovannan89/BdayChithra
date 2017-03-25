Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :homes do
  	get 'register'
  	get 'start', :on => :collection
  end
  root :to => 'homes#index'
end
