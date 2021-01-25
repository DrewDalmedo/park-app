class User < ApplicationRecord
  # uses bcrypt to encrypt passwords
  has_secure_password

  # validations
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true # add custom validation of emails later (verifying correct format)


end
