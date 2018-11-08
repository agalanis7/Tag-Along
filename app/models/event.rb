class Event < ApplicationRecord
  belongs_to :location
  belongs_to :user
  belongs_to :participant, class_name: "User", optional: true
end
