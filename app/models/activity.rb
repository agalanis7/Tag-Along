class Activity < ApplicationRecord
  has_many :activities through: :profile_activities
end
