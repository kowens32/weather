function fetchWeatherVideos(weatherCondition) {
    const apiKey = 'YOUR_PEXELS_API_KEY'; // Replace with your actual Pexels API key
    const apiUrl = `https://api.pexels.com/videos/search?query=${weatherCondition}&per_page=1`;

    fetch(apiUrl, {
        headers: {
            Authorization: apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        displayVideo(data.videos[0]);
    })
    .catch(error => console.error('Error fetching videos:', error));
}

function displayVideo(videoData) {
    const videoUrl = videoData.video_files[0].link;

    const videoElement = document.createElement('video');
    videoElement.src = videoUrl;
    videoElement.controls = true;
    videoElement.autoplay = true;
    videoElement.loop = true;

    // Append the video element to your page
    const container = document.getElementById('video-container');
    container.innerHTML = ''; // Clear any previous videos
    container.appendChild(videoElement);
}
