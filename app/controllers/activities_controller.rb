class ActivitiesController < ApplicationController
  def index
    respond_to do |format|
      format.html do
        @activity = Activity.new
      end
      format.json do
        @activities = Activity.all
        render json: @activities
      end
    end
  end
end
