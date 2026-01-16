const video = document.getElementById("bg-video");

const tryplay = () => {
    video.onplay().catch(() => {} );
}

video.addEventListener("loadedmetadata", tryplay);
document.addEventListener("touchstart", tryplay, {once: true});