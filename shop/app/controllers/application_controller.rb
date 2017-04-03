class ApplicationController < ActionController::Base
  include Tracking

  protect_from_forgery with: :exception

  before_action { raise if rand < 0.1 }
end
