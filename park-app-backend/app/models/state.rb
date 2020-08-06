class State < ApplicationRecord
    # has many parks, but if the state is deleted, the parks should be too
    has_many :parks, :dependent => :delete_all
end
