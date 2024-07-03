class Message < ApplicationRecord
  validates :body, presence: true

  belongs_to :user

  scope :twenty_latest, -> { order(:created_at).last(20) }
end
