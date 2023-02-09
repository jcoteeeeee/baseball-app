class UsersController < ApplicationController 
    def index 
        user = User.all 
        render json: user 
    end 

    def show
        if current_user
        render json: current_user, status: :ok
    else
        render json: "No current session stored", status: :unauthorized
    end 
    
    def create
        user = User.create(user_params)
        session[:user_id] = user.id # this is the piece that logs a user in and keeps track of users info in subsequent requests.
        render json: user, status: :created
    end

    def update 
        user = User.find_by(id: params[:id])
        user.update(first_name: params[:first_name], last_name: params[:last_name], username: params[:username], email: params[:email], password: params[:password], fav_team: params[:fav_team], photo: params[:photo])  
        render json: user 
    end 

    def destroy 
        user = User.find_by(id: params[:id])
        user.destroy  
    end 

    def user_params
        params.premit(:usrname, :email, :password)
    end

      def user_params
      params.permit(:username, :email, :password, :password_confirmation)
  end
    
end
