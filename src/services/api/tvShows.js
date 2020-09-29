 import axios from 'axios'

     export function tvShowList() {
        return axios.get('http://api.tvmaze.com/shows')
     }