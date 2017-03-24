FROM ruby:2.3.3

RUN curl -sL https://deb.nodesource.com/setup_6.x | sh
RUN apt-get install -y nodejs

ENV RAILS_ENV production
ENV SECRET_KEY_BASE 2bf86edc1c7240c4390ec0a821178196cbe1b9d882bf193e652ddd6c414802fd9d9bf8c98eb9d17d2adf403a0b664db8986c21a390a7d50b3857d004ecbe2089

COPY Gemfile .
COPY Gemfile.lock .
RUN bundle

COPY . .

RUN rails assets:precompile

CMD ["rails", "s", "-b", "0.0.0.0"]
