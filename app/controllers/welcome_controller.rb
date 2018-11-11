class WelcomeController < ApplicationController
  before_action :require_login

  def home
  end
  def info
  end

  private
    def require_login
      if current_user
        redirect_to events_path
      end
    end

end
