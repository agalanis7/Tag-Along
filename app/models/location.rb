class Location < ApplicationRecord
  belongs_to :activity, through: :activity_locations
  has_many :events 
end
