import Player from "./Player";
import { useRef, useState, useEffect } from "react";
import {songsdata} from "./Audios";

const AudioPlayer = () => {
    const [songs, setSongs] = useState(songsdata);
    const [isplaying, setisplaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(songsdata[1]);

    const audioElem = useRef();

    useEffect(() => {
        var playPromise = audioElem.current.play();
        if(playPromise !== undefined && !isplaying){
            playPromise.then(_ => {
                audioElem.current.pause();
            })
            
        }
        
        // if(isplaying){
        //     audioElem.current.play();
        // }
        // else {
        //     audioElem.current.pause();
        // }
    }, [isplaying])

    const onplaying = () => {
        const duration = audioElem.current.duration;
        const ct = audioElem.current.currentTime;

        setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration})
    }

    return (
        <div className="audio-player">
            <audio src={songsdata.url} type="audio.mp3" ref={audioElem} onTimeUpdate={onplaying}/>
            <Player songs={songs} setSongs={setSongs} isplaying={isplaying} setisplaying={setisplaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong} />
        </div>
    );
}

export default AudioPlayer;