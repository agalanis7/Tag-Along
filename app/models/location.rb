class Location < ApplicationRecord
  has_many :activity, through: :activity_locations
  has_many :activity_locations
  has_many :events
end
