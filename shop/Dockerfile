FROM ruby:2.3.3

RUN curl -sL https://deb.nodesource.com/setup_6.x | sh
RUN apt-get install -y nodejs

RUN apt-get install -y --no-install-recommends software-properties-common
RUN add-apt-repository "deb http://apt.postgresql.org/pub/repos/apt/ xenial-pgdg main"
RUN wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add -
RUN apt-get update && apt-get install -y postgresql-client-9.6

ENV RAILS_ENV production
ENV SECRET_KEY_BASE 2bf86edc1c7240c4390ec0a821178196cbe1b9d882bf193e652ddd6c414802fd9d9bf8c98eb9d17d2adf403a0b664db8986c21a390a7d50b3857d004ecbe2089
ENV RAILS_SERVE_STATIC_FILES 1

COPY Gemfile .
COPY Gemfile.lock .
RUN bundle

COPY . .

RUN rails assets:precompile RAILS_ENV=build
RUN rm -f db/build.sqlite3

ENTRYPOINT ["./docker-entrypoint.sh"]
CMD ["rails", "s", "-b", "0.0.0.0"]
