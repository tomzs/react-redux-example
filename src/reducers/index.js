// Reducers
import { combineReducers } from 'redux'

// Song list reducer
const songsReducer = () => {
  return [
    { title: 'Nice for What', duration: '3:31' },
    { title: 'Praise da Lord', duration: '3:25' },
    { title: 'Come and Get Your Love', duration: '3:26' },
    { title: 'All Star', duration: '3:15' }
  ]
}

// Selected song reducer
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }
  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})
