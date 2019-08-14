import session from 'express-session'

const options = {
  secret: process.env.SESSION_SECRET,
  allowEmpty: true,
  resave: false,
  saveUninitialized: false,
  ttl: 60 * 60,
  cookie: {
    maxAge: 1000 * 60 * 60 * 90 * 24,
    httpOnly: true,
    rewrite: true,
    signed: true
  }
}

export default session(options)
