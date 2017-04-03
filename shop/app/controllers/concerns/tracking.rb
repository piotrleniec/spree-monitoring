module Tracking
  extend ActiveSupport::Concern

  included do
    before_action do
      if session.loaded?
        if session[:track].blank? || Time.zone.now - session[:track_expires_in].to_time > 30.minutes
          session[:track] = SecureRandom.uuid
        end

        session[:track_expires_in] = 30.minutes.from_now
      end
    end
  end

  private

  def append_info_to_payload(payload)
    super

    payload[:track] = session[:track]
  end
end
