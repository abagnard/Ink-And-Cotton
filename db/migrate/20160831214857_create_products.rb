class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :title, null: false
      t.string :type, null: false
      t.integer :artist_id, null: false
      t.string :description
      t.integer :price, null: false
      t.boolean :in_stock, default: true
      t.string :img_url

      t.timestamps null: false
    end
    add_index :products, :artist_id
  end
end
