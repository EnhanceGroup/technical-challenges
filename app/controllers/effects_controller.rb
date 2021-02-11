class EffectsController < ApplicationController
  def index; end

  def create; end

  private

  def effect_params
    params.require(:effect).permit(:name, :effect_type, :sub_type)
  end
end
