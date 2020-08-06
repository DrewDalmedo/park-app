class ParksController < ApplicationController
    def index
        parks = Park.all
        render json: parks, except: excluded_data
    end

    def show
        park = Park.find([params[:id]])
        render json: park, except: excluded_data
    end

    private

    def excluded_data
        [:created_at, :updated_at]
    end
end
