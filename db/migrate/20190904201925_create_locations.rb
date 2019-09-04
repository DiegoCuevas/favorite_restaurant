class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      t.decimal :latitud
      t.decimal :longitud
      t.string :address

      t.timestamps
    end
  end
end
