class CreateCartItems < ActiveRecord::Migration
  def change
    create_table :cart_items do |t|
      t.integer :user_id, null: false
      t.integer :product_id, null: false
      t.integer :quantity
      t.timestamps null: false
    end
      add_index :cart_items, :user_id
      add_index :cart_items, :product_id
  end
end
