var playlist = { 'Slowdive': 'Alison', 'My Bloody Valintine': 'Sometimes'}

function updatePlaylist(playlist, artistsName, songTitle){
  var artistName ='Phil Ochs'
  songTitle = "Here's to the State of Mississippi"
  
  Object.assign({}, playlist, {'Phil Ochs': songTitle})
  
  return playlist
}

