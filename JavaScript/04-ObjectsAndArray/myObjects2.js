let myYoutubeVideoOne = {
    title: 'Binary Calculator',
    videoLength: 1,
    videoCreator: 'Anushka Raj',
    videoDescription: 'this is a video on Binary Calculator'
}

let myYoutubeVideoTwo = {
    title: 'Gradient Effect',
    videoLength: 3,
    videoCreator: 'Anushka Raj',
    videoDescription: 'this is a video on Gradient Effects'
}

let changeVideoLength = function(myObject){
    return {
        formatOne: `Time of this video is: ${myObject.videoLength +2}`,
        formatTwo: `Time of this video is: ${myObject.videoLength + 1}`

    }
}
console.log(changeVideoLength(myYoutubeVideoOne));
console.log(changeVideoLength(myYoutubeVideoTwo));

let adOne = changeVideoLength(myYoutubeVideoTwo);
console.log(adOne.formatTwo);
