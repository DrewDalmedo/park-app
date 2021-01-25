class UsersController < ApplicationController
  def index
    users = User.all
    render json: users
    # add json error handling later (status 500) 
  end

  def show
    user = User.find(params[:id])
    # add json error handling later (status 500)
  end

  def create
    user = User.new(user_params)
    if user.save
      login!
      render json: {
        status: :created,
        user: user
      }
    else
      render json: {
        status: 500,
        errors: user.errors.full_messages
      }
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
    # add json error handling later (status 500)
  end
end
