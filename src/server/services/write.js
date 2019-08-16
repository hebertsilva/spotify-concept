function defaultResponse(res, data, status) {
  res.setHeader('Accept', 'application/json')
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
  res.setHeader('Pragma', 'no-cache')
  res.setHeader('Expires', '0')
  res.response = data
  res.statusCode = status
  res.writeHead(status)
  res.end(JSON.stringify(data))
}

function genHeaders(req, type) {
  const { accounts } = req.session
  if (!accounts) {
    return {}
  }

  switch (type) {
    case 'Bearer':
      return {
        headers: {
          Authorization: `Bearer ${accounts.access_token}`
        }
      }
      break
    default:
      return {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
  }
}

export default {
  response: defaultResponse,
  genHeaders
}
