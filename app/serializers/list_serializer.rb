class ListSerializer < ActiveModel::Serializer
  attributes :id, :title, :board_id, :ord

  belongs_to :board
end
