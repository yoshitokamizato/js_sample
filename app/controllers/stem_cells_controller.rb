class StemCellsController < ApplicationController

  def index
  end

  def get_stem_cells_data
    @blood = StemCell.where(name: "造血幹細胞")
    render 'stem_cells.json'
  end

end
