MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

const onMutation = (mutationList, observer) => {
    for (const mutation of mutationList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
            console.log(mutation)
        }
    }
};

const observer = new MutationObserver(onMutation);
observer.observe(document, {childList: true, subtree: true });
observer.disconnect();


chrome.tabs.onUpdated.addListener(
    function (tabId, changeInfo, tab) {
        console.log(tabId, changeInfo, tab)
    }
);


"background": {
    "service_worker": "background.js"
  },



  https://d21pr33ep1h6mu.cloudfront.net/bundles/com.stagecast.speed_quiz/3.1.3/src/mobile/
  document.getElementById("root").children[0].children[0].children[0].contentWindow