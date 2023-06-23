
window.onload = () => {

    const song_img_el = document.getElementById('song-image');
    const song_title_el = document.getElementById('song-title');
    const song_artist_el = document.getElementById('song-artist');
    const song_next_up_el = document.getElementById('song-next-up');

    const play_btn = document.getElementById('play-btn');
    const play_btn_icon = document.getElementById('play-icon');
    const prev_btn = document.getElementById('prev-btn');
    const next_btn = document.getElementById('next-btn');

const audio_player = document.getElementById('music-player');

let current_song_index;
let next_song_index;

let songs = [
    {
        title: 'Conexões De Máfia',
        artist: 'Matuê, Rich The Kid',
        song_path:'music/m1.mpeg',
        img_path: './assets/images/conexões.jpg'
    },
    {
        title: 'Hoje Faz Um Mês',
        artist: 'Chaguinha Bala',
        song_path: 'music/m2.mpeg',
        img_path: './assets/images/chaguinha.jpg'
    },
    {
        title: 'Borbulhas De Amor',
        artist: 'Fagner',
        song_path: 'music/m3.mpeg',
        img_path: './assets/images/Borbulhas.jpg'
    },
    {
        title: 'Hora Errada',
        artist: 'Veigh',
        song_path: 'music/Hora.mp3',
        img_path: './assets/images/deluxe.jpg'
    },
    {
        title: 'Detalhes',
        artist: 'Veigh',
        song_path: 'music/Detalhes.mp3',
        img_path: './assets/images/deluxe.jpg'
    },
    {
        title: 'Melhor Só',
        artist: 'Kayblack',
        song_path: 'music/melhor só.mp3',
        img_path: './assets/images/kayblack.jpeg'
    },
    {
        title: 'Segredo',
        artist: 'Kayblack',
        song_path: 'music/segredo.mp3',
        img_path: './assets/images/kayblack.jpeg'
    },
    {
        title: 'Halls Na Língua',
        artist: 'Kadu Martins',
        song_path: 'music/Halls na Língua.mp3',
        img_path: './assets/images/Halls.jpg'
    },
    {
        title: 'Aí cê Liga',
        artist: 'Vitor Fernandes',
        song_path: 'music/Aí cê liga.mp3',
        img_path: './assets/images/ai ce liga.jpg'
    },
    {
        title: 'Meu Mel',
        artist: 'Zé Vaqueiro',
        song_path: 'music/Meu Mel.mp3',
        img_path: './assets/images/Meu Mel.jpg'
    },
]

play_btn.addEventListener('click', TogglePlaySong);
next_btn.addEventListener('click', () => ChangeSong());
prev_btn.addEventListener('click', () => ChangeSong(false));

InitPlayer();

function InitPlayer() {
    current_song_index = 0;
    next_song_index = current_song_index + 1;
    UpdatePlayer();
}

function UpdatePlayer() {
    let song = songs[current_song_index];

    song_img_el.style = "background-image: url('" + song.img_path + "')";
    song_title_el.innerText = song.title;
    song_artist_el.innerText = song.artist;

    song_next_up_el.innerText = songs[next_song_index].title + " by " +  songs[next_song_index].artist;

    audio_player.src = song.song_path;
}

function TogglePlaySong() {
    if (audio_player.paused) {
        audio_player.play();
        play_btn_icon.classList.remove('fa-play');
        play_btn_icon.classList.add('fa-pause');
    } else {
        audio_player.pause();
        play_btn_icon.classList.add('fa-play');
        play_btn_icon.classList.remove('fa-pause');

    }
}

function ChangeSong (next = true ) {
    if (next) {
        current_song_index++;
        next_song_index = current_song_index +1;

        if (current_song_index > songs.length - 1) {
            current_song_index = 0;
            next_song_index = current_song_index + 1;
        }

        if (next_song_index > songs.length - 1) {
            next_song_index = 0;
        }
    } else {
        current_song_index--;
        next_song_index = current_song_index + 1;

        if (current_song_index < 0) {
            current_song_index = songs.length - 1;
            next_song_index = 0;
        }

    }

    UpdatePlayer();
    TogglePlaySong();
}

}
