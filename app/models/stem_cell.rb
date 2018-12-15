require 'csv'

class StemCell < ApplicationRecord
  def self.import
    StemCell.delete_all
    list = []
    CSV.foreach("db/data/stem_cells_data.csv", headers: true) do |row|
      list << {name: row["name"], differenciation: row["differenciation"]}
    end
    StemCell.create!(list)
  rescue => e
    puts "インポート失敗 #{e}"
  end

  def self.category
    blood = StemCell.where(name: "造血幹細胞")
    mesenchynal = StemCell.where(name: "間葉系幹細胞")
    hepatic = StemCell.where(name: "肝幹細胞")
    pancreatic = StemCell.where(name: "膵幹細胞")
    {blood: blood, mesenchynal: mesenchynal, hepatic: hepatic, pancreatic: pancreatic}
  end
end
