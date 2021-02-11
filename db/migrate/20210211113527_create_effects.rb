class CreateEffects < ActiveRecord::Migration[6.0]
  def change
    create_table :effects do |t|
      t.integer :effect_type
      t.integer :sub_type
      t.string :name

      t.timestamps
    end

    Effect.create(effect_type: :visual, sub_type: :cgi, name: 'Space Battle')
    Effect.create(effect_type: :special, sub_type: :practical, name: 'Animated Suitcase')
    Effect.create(effect_type: :personal, sub_type: :wallet, name: 'Lovable Scoundrel\'s wallet')
    Effect.create(effect_type: :magical, sub_type: :you_shall_not_pass, name: 'The Hero\'s Moment')
  end
end
