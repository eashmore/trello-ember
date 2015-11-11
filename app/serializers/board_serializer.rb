ActiveModel::Serializer.config.adapter = :json_api

class BoardSerializer < ActiveModel::Serializer
  attributes :id, :title, :user_id

  has_many :lists
end
