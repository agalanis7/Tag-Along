class Profile < ApplicationRecord
  belongs_to :user
  has_many :events, through: :profile_events
  has_many :activities, through: :profile_activities
end
