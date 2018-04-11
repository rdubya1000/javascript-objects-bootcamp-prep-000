var playlist = { 'Slowdive': 'Alison'}

function updatePlaylist(playlist, artistsName, songTitle){

  Object.assign({}, playlist, {'Phil Ochs': "Here's to the State of Mississippi"}, {"Slowdive": 'Alison'}, {'My Bloody Valentine': 'Sometimes'})
  
  return playlist
}

