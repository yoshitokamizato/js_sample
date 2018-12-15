class StemCellsController < ApplicationController

  def index
  end

  def get_stem_cells_data
    @category = StemCell.category
    render 'stem_cells.json'
  end

end
