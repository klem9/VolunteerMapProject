class UsersController < ApplicationController
    def index 
        render json: User.all 
    end 

    def create 
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created
        else 
            render json: {errors: ["User not valid"]},status: :unprocessable_entity
        end 
    end 

    private

    def user_params
        params.permit(:username, :password)
    end
end