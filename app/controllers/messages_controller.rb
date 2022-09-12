class MessagesController < ApplicationController
  def index
    @greet = Message.find(rand(1..Message.count))

    render json: {greet: @greet}, status: :ok
  end
end
