var playlist = { Metallica: 'One'};

playlist.Slowdive = 'Alison'
playlist['My Bloody Valintine'] = 'Sometimes'

function updatePlaylist (playlist, artistName, songTitle){

  Object.assign({ slowdive: 'Alison'}, {'My Bloody Valentine': 'Sometimes'})
  
  return playlist
}
