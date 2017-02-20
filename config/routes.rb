Rails.application.routes.draw do

    get '/' => 'site#index'
    post '/register' => 'user#register'
    get 'home/:id' => 'user#show'
end
