 
 export const checkMediaType = (url) => {
    
    const imageMatch =  [];
    const videoMatch = [];
    const regexImg = [/.jpg/, /.jpeg/, /.png/, /.gif/, /.bmp/, /.webp/];
    const regexVid = [/youtube.com/, /vimeo.com/, /dailymotion.com/, /youtu.be/,/.mp4/, /.mpeg/, /.mpeg-4/, /.wmv/, /.avi/, /.flv/, /.webm/, /.mkv/]

    regexImg.forEach(element => {
        
        if ( element.test(url)) {
            imageMatch.push(element)
        }

    })

    if (imageMatch.length > 0) {
        return 'image';
    }

    regexVid.forEach(element => {
        
        if ( element.test(url)) {
            videoMatch.push(element);
        }

    })

    if (videoMatch.length > 0) {
                return 'video';
    }

}