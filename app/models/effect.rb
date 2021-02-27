class Effect < ApplicationRecord

  VISUAL_EFFECTS = { cgi: 0, animation: 1 }.freeze
  SPECIAL_EFFECTS = { practical: 2, prosthetics: 3, makeup: 4 }.freeze
  PERSONAL_EFFECTS = { wallet: 5, keys: 6, watch: 7 }.freeze
  MAGICAL_EFFECTS = { levitation: 8, aparation: 9, you_shall_not_pass: 10 }.freeze


  enum effect_type: {
    visual: 0,
    special: 1,
    personal: 2,
    magical: 3
  }

  enum sub_type: {
    **VISUAL_EFFECTS,
    **SPECIAL_EFFECTS,
    **PERSONAL_EFFECTS,
    **MAGICAL_EFFECTS
  }


  def self.effect_sub_obj
    effects_subs =  {visual: VISUAL_EFFECTS,
          special: SPECIAL_EFFECTS,
          personal: PERSONAL_EFFECTS,
          magical: MAGICAL_EFFECTS}
    main_obj = {}

    for effect in effects_subs.keys
        sub_types = []

        for key in effects_subs[effect].keys
            sub_types << key
        end

        main_obj[effect] = sub_types
    end
    main_obj
  end

  def self.assign_valid_list
    puts valid_list
  end

  def get_valid_list
    main_obj = Effect.effect_sub_obj
    valid_list = main_obj[effect_type.to_sym]
    valid_list = valid_list.map(&:to_s)
    if sub_type.in?(valid_list)
      puts "its all good!"
    else
      puts "its not all good..."
      errors.add(:sub_type, :invalid)
    end
  end

  def effect_val
    valid_list = Effect.get_valid_list
    puts valid_list
  end

  validate :get_valid_list
end
