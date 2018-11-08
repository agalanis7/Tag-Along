class Activity < ApplicationRecord
  has_many :users, through: :user_activities
  has_many :locations, through: :activity_locations
end
