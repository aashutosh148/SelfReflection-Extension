// content.js
chrome.storage.local.get(['targetDomains'], function (result) {
    const domains = result.targetDomains || [];
    const currentDomain = window.location.hostname;

    if (domains.some(domain => currentDomain.includes(domain))) {
        const memeContainer = document.createElement('div');
        memeContainer.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10000;
        background: white;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
      `;

        const memeImage = document.createElement('img');
        memeImage.src = chrome.runtime.getURL('meme.jpg');
        memeImage.style.maxWidth = '500px';
        memeImage.style.maxHeight = '500px';

        const closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.style.display = 'block';
        closeButton.style.margin = '10px auto';
        closeButton.style.padding = '10px';
        closeButton.style.backgroundColor = 'black';
        closeButton.style.color = 'white';
        closeButton.style.borderRadius = '3px';
        closeButton.onclick = () => memeContainer.remove();

        memeContainer.appendChild(memeImage);
        memeContainer.appendChild(closeButton);
        document.body.appendChild(memeContainer);
    }
});