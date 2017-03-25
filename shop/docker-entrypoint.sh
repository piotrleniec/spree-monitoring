#!/bin/bash

sleep 1

if [ ! -f database_initialized ]; then
  rails db:migrate \
    && rails db:seed AUTO_ACCEPT=1 \
    && rails spree_sample:load \
    && touch database_initialized
fi

if [ ! -f assets_precompiled ]; then
  rails assets:precompile && touch assets_precompiled
fi

rails s -b 0.0.0.0
