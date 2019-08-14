require('dotenv').config()

export const REDIRECT_URI = process.env.REDIRECT_URI
export const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
export const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET
export const STATE_KEY = 'spotify_auth_state'
export const API_BASE_ACCOUNTS = 'https://accounts.spotify.com'
export const API_BASE = 'https://api.spotify.com/v1'
