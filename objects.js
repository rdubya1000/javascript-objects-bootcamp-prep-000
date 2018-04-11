var playlist = { Metallica: 'One'};

playlist.Slowdive = 'Alison'
playlist['My Bloody Valintine'] = 'Sometimes'

function updatePlaylist (playlist, key, value){

  Object.assign({ slowdive: 'Alison'}, {'My Bloody Valentine': 'Sometimes'})
  
  return playlist
}
