const processVideo = id => fetch("https://cnmooc.org/study/updateDurationVideo.mooc", {
    "credentials": "include",
    "headers": {
        "Accept": "*/*",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Requested-With": "XMLHttpRequest"
    },
    "body": `itemId=${id}&isOver=1&currentPosition=9999999999&duration=1115000`,
    "method": "POST",
    "mode": "cors"
});

const processDocs = id => fetch(`https://cnmooc.org/study/updateDurationDoc.mooc?over=2&itemId=${id}`, {
    "credentials": "include",
    "headers": {
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "X-Requested-With": "XMLHttpRequest"
    },
    "method": "GET",
    "mode": "cors"
});

const process = el => {
    switch (parseInt(el.getAttribute('itemtype'))) {
        case 10:
            processVideo(el.getAttribute('itemid'))
            break;

        case 20:
            processDocs(el.getAttribute('itemid'))
            break;
    
        default:
            console.log('...')
            break;
    }
}

const main = () => {
    let possibleEl = document.querySelectorAll('.lecture-action');
    possibleEl.forEach(el => process(el));
}

main();