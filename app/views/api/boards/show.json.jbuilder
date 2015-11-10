json.set! 'board' do
  json.partial! 'api/boards/board', board: @board
  json.lists @board.lists do |list|
    json.partial! 'api/lists/list', list: list
  end
end
