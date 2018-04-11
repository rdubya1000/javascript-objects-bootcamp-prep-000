var playlist = { 'Slowdive': 'Alison', 'My Bloody Valintine': 'Sometimes'}

function updatePlaylist(playlist, artistsName, songTitle){

  Object.assign({}, playlist, {'Phil Ochs': "Here's to the State of Mississippi"})
  
  return playlist
}

