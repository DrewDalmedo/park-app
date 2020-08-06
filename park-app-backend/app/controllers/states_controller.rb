class StatesController < ApplicationController
    def index
        states = State.all
        render json: states, include: [:parks => {except: excluded_data}], except: excluded_data
    end
    
    def show
        state = State.find(params[:id])
        render json: state, include: [:parks => {except: excluded_data}], except: excluded_data
    end

    def destroy
        state = State.find(params[:id])
        state.destroy()
    end

    private

    def excluded_data
        [:created_at, :updated_at]
    end
end
