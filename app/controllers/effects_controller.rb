class EffectsController < ApplicationController

  def index
    @effects = Effect.all
  end

  def show
    id = params[:id]

    if id == 'effect_types'
        effects = Effect.effect_types
    end

    if id == 'e_s_o'
        effects = Effect.effect_sub_obj
    end

    render json: effects
  end


  def create
    @new_effect = Effect.new(effect_params)
    @new_effect.save
    redirect_to effects_path
  end

  private

  def effect_params
    params.require(:effect).permit(:effect_type, :sub_type, :name)
  end

end
