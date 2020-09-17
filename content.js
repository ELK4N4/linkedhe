const hebrew = new RegExp(/[\u0590-\u05FF\uFB2A-\uFB4E]/);

function updatePosts(){
    let postWrapper = document.getElementsByClassName('feed-shared-text');
    for (post of postWrapper) {
        let postText = post.getElementsByClassName('break-words')[0].getElementsByTagName('span')[0].getElementsByTagName('span')[0];
        if(postText) {
            if(hebrew.test(postText.outerHTML)) {
                postText.setAttribute("dir", "rtl");
                post.setAttribute("dir", "rtl");
                console.log('updated post');
            } else {
                console.log('continue');
                continue;
            }
        } else {
            let postText = post.getElementsByClassName('break-words')[0].getElementsByTagName('span')[0];
            if(hebrew.test(postText.outerHTML)) {
                postText.setAttribute("dir", "rtl");
                post.setAttribute("dir", "rtl");
                console.log('updated post');
            } else {
                console.log('continue');
                continue;
            }
        }
    }
    postWrapper = document.getElementsByClassName('feed-shared-update-v2__commentary');
    for (post of postWrapper) {
        let postText = post.getElementsByClassName('break-words')[0].getElementsByTagName('span')[0].getElementsByTagName('span')[0];
        if(postText) {
            if(hebrew.test(postText.outerHTML)) {
                postText.setAttribute("dir", "rtl");
                post.setAttribute("dir", "rtl");
                console.log('updated post');
            } else {
                console.log('continue');
                continue;
            }
        } else {
            let postText = post.getElementsByClassName('break-words')[0].getElementsByTagName('span')[0];
            if(hebrew.test(postText.outerHTML)) {
                postText.setAttribute("dir", "rtl");
                post.setAttribute("dir", "rtl");
                console.log('updated post');
            } else {
                console.log('continue');
                continue;
            }
        }
    }
}


updatePosts();

window.onscroll = updatePosts;

