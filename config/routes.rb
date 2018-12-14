Rails.application.routes.draw do
  root to: 'stem_cells#index'
  get '/stem_cells/data', to: 'stem_cells#get_stem_cells_data'
end
