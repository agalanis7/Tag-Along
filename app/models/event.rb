class Event < ApplicationRecord
  belongs_to :location
  belongs_to :user, through: :user_events 
end
