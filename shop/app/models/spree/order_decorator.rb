Spree::Order.class_eval do
  state_machine.after_transition do |order, transition|
    Rails.logger.info({type: :order_transition,
                       order_id: order.id,
                       from_state: transition.from,
                       to_state: transition.to}.to_json)
  end
end
