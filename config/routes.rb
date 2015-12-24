Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Serve websocket cable requests in-process
  # mount ActionCable.server => '/cable'
  root to: "index#index"
  resources :educational, only: [] do
    collection do
      get :ruby_basic_input
      get :ruby_basic
      get :object_input
      get :object
      get :method_input
      get :method
      get :if_input
      get :if
      get :for_input
      get :for
    end
  end
end
