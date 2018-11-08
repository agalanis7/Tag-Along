json.extract! event, :id, :event_date, :start_time, :end_time, :quantity, :notification, :completed, :created_at, :updated_at
json.url event_url(event, format: :json)
