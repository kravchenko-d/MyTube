import YouTube from "./entities/YouTube"

const youtube = new YouTube(document.getElementById('app'))

youtube.init()

const f = document.getElementById('form');
const q = document.getElementById('query');
const youtube_search = 'https://www.youtube.com/results?search_query=';

function submitted(event) {
    event.preventDefault();
    const url = youtube_search + q.value;
    const win = window.open(url, '_blank');
    win!.focus();
  }
  
  f!.addEventListener('submit', submitted);