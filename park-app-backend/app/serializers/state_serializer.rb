class StateSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :parks, serializer: ParkSerializer
end