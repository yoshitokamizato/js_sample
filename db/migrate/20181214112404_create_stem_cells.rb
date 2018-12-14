class CreateStemCells < ActiveRecord::Migration[5.2]
  def change
    create_table :stem_cells do |t|
      t.string :name
      t.string :differenciation
      t.timestamps
    end
  end
end
