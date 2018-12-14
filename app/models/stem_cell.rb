require 'csv'

class StemCell < ApplicationRecord
  def self.import
    list = []
    CSV.foreach("db/data/stem_cells_data.csv", headers: true) do |row|
      list << {name: row["name"], differenciation: row["differenciation"]}
    end
    StemCell.create!(list)
  rescue => e
    puts "インポート失敗 #{e}"
  end
end
