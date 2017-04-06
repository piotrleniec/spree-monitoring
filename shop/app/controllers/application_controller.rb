class ApplicationController < ActionController::Base
  include Tracking

  protect_from_forgery with: :exception
end
