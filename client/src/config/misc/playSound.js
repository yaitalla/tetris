const playsound = (soundID) => {
    const audio = document.getElementById(soundID);
    if (audio != null) {
        audio.play();
        setTimeout(() => {
            audio.pause();
            audio.currentTime = 0;
        }, soundID == "landing" || "clear line" ? 900 : 200)
    }
}

export default playsound;