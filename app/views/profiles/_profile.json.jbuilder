json.extract! profile, :id, :first_name, :last_name, :gender, :email, :phone_number, :notification, :created_at, :updated_at
json.url profile_url(profile, format: :json)
