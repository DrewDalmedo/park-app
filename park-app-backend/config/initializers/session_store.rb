if Rails.env === 'production'
  Rails.application.config.session_store :cookie_store, key: '_park-app-backend', domain: 'park-app-backend-json-api'
else
  Rails.application.config.session_store :cookie_store, key: '_park-app-backend'
end