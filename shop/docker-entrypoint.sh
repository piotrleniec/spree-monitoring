#!/bin/bash

sleep 1

if [ ! -f assets_precompiled ]; then
  rails assets:precompile && touch assets_precompiled
fi

rails s -b 0.0.0.0
