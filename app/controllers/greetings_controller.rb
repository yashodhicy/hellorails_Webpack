class GreetingsController < ApplicationController
    def index
        @random_greeting = Greeting.order('RANDOM()').first
    end
end
