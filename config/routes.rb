Rails.application.routes.draw do

    get '/' => 'site#index'
    post '/register' => 'user#register'
    get 'home/:id' => 'user#show'
    get 'search' => 'api#search'
    post '/follow_address' => 'user#follow_address'
    get '/politician/:id' => 'politician#show'
end
