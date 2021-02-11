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
end
