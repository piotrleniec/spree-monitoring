FROM ruby:2.3.3

RUN curl -sL https://deb.nodesource.com/setup_6.x | sh
RUN apt-get install -y nodejs

COPY Gemfile .
COPY Gemfile.lock .
RUN bundle

COPY . .

CMD ["rails", "s", "-b", "0.0.0.0"]
