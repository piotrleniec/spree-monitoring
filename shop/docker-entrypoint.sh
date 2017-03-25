#!/bin/bash

if [ ! -f database_initialized ]; then
  rails db:migrate \
    && rails db:seed AUTO_ACCEPT=1 \
    && rails spree_sample:load \
    && touch database_initialized
fi

exec "$@"
