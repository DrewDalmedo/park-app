class StatesController < ApplicationController
    def index
        states = State.all
        render json: states
    end
    
    def show
        state = State.find(params[:id])
        render json: state
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

end
