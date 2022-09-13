class MessagesController < ApplicationController
  def index
    @greet = Message.find(rand(1..Message.count))

    render json: { greet: @greet.greetings }, status: :ok
  end
end
