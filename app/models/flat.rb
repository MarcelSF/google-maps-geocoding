class Flat < ApplicationRecord
  geocoded_by :address
  after_validation :geocode, if: :will_save_change_to_address?

  def coordinates
    "latitude: #{latitude}, longitude: #{longitude}"

  end
end
