class UsersController < ApplicationController
  def index
    users = User.all
    render json: users
    # add error handling later (status 500) 
  end

  def show
    user = User.find(params[:id])
    # add error handling later (status 500)
  end

  def create
    user = User.new(user_params)
    # add error handling later (status 500)
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
    # add error handling later (status 500)
  end
end
