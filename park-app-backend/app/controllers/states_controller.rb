class StatesController < ApplicationController
    def index
        states = State.all
        render json: states, include: [:parks => {except: [:created_at, :updated_at]}], except: [:created_at, :updated_at]
    end
    
end
