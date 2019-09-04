class LocationsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]
  
  def index
    render json: Location.all
  end

  def show
    Places.params(:latitud, :longitud)
    render json: Location.find(params[:id])
  end

  def create
    render json: Location.create(location_params)
  end

  def update
   render json: Location.find(params[:id]).update(location_params)
  end

  private

  def location_params
    params.permit(:latitud, :longitud, :address)
  end

end
