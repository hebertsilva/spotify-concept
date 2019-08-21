export function isEmpty(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false
    }
  }

  return true
}

export function query() {
  return window.location.search
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      if (item) {
        var parts = item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1])
      }

      return initial
    }, {})
}
