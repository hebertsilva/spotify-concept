export default function(req, res, next) {
  req.session = null
  res.send({ signout: true })
}
