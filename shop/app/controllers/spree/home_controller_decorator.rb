Spree::HomeController.class_eval do
  before_action :random_error, only: :index

  private

  def random_error
    raise if rand < 0.333
  end
end
