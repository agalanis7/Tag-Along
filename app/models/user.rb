class User < ApplicationRecord
  has_one :profile
  has_many :events
  has_many :activities, through: :user_activities
  has_many :events_where_participant, class_name: "Event", foreign_key: "participant_id"
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
