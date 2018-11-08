class User < ApplicationRecord
  has_one :profile
  has_many :events, through: :user_events
  has_many :activities, through: :user_activities
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
