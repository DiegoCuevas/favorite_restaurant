require "google_places"
class RestaurantsController < ApplicationController
  def initialize
    @client = GooglePlaces::Client.new(ENV["GOOGLE_PLACES_KEY"])
  end

  def restaurants
    lat = params[:lat]
    lng = params[:lng]
    render json: @client.spots(lat, lng, :types => ['restaurant','food'], detail: true)
  end
end