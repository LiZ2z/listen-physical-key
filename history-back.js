
function pushState(callback) {
  window.history.pushState({do: true}, null, window.location.href)
  window.history.pushState({}, null, window.location.href)
  window.addEventListener('popstate', handlePopStateChange)

  function handlePopStateChange(e) {
    window.removeEventListener('popstate', handlePopStateChange)
    const state = window.history.state
    if(state && state.do) {
      callback(e)
    }
  }
}

function hashChange(callback) {
  window.location.hash = String(window.location.hash)
  window.addEventListener('hashchange', handleHashChange)

  function handleHashChange(e) {
    window.removeEventListener('hashchange', handleHashChange)
    if(e.oldURL === e.newURL) {
      callback(e)
    }
  }
}

export default window.history.pushState ? pushState : hashChange
