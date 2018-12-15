json.stems do
  json.blood @category[:blood], :name, :differenciation
  json.mesenchynal @category[:mesenchynal], :name, :differenciation
  json.hepatic @category[:hepatic], :name, :differenciation
  json.pancreatic @category[:pancreatic], :name, :differenciation
end
