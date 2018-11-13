class Activity < ApplicationRecord
  has_many :user_activities, dependent: :destroy
  has_many :users, through: :user_activities
  has_many :activity_locations, dependent: :destroy
  has_many :locations, through: :activity_locations
  has_one  :activity_event, dependent: :destroy
  has_one :event, through: :activity_event



end
