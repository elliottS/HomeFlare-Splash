class CreateBlogs < ActiveRecord::Migration
  def change
    create_table :blogs do |t|
      t.datetime :published
      t.string :author
      t.text :content
      t.string :title

      t.timestamps
    end
  end
end
