class Event < ApplicationRecord
  has_many :profiles through: :profile_events
  has_many :activities through: :profile_activities
end
