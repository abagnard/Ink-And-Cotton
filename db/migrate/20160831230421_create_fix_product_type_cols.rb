class CreateFixProductTypeCols < ActiveRecord::Migration
  def change
    rename_column :products, :type, :medium
  end
end
