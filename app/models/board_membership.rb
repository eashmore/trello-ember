class BoardMembership < ActiveRecord::Base
  belongs_to :user, inverse_of: :board_memberships
  belongs_to :board, inverse_of: :board_memberships
end
