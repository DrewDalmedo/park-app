class StatesController < ApplicationController
    def index
        states = State.all
        render json: states, include: [:parks => {except: excluded_data}], except: excluded_data
    end
    
    def show
        state = State.find(params[:id])
        render json: state, include: [:parks => {except: excluded_data}], except: excluded_data
    end

    def create
        state = State.create(state_params)
        redirect_to state_path(state)
    end

    def destroy
        state = State.find(params[:id])
        state.destroy()
    end

    private

    def state_params
        params.permit(:name)
    end

    def excluded_data
        [:created_at, :updated_at]
    end
end
