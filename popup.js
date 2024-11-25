function updateDomainList() {
    chrome.storage.local.get(['targetDomains'], function (result) {
        const domains = result.targetDomains || [];
        const listElement = document.getElementById('domainList');
        listElement.innerHTML = '<h4>Saved Domains:</h4>';

        domains.forEach((domain, index) => {
            const domainDiv = document.createElement('div');
            domainDiv.className = 'domain-item';

            const domainText = document.createElement('span');
            domainText.textContent = domain;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Remove';
            
            deleteButton.onclick = () => {
                domains.splice(index, 1);
                chrome.storage.local.set({ 'targetDomains': domains }, updateDomainList);
            };

            domainDiv.appendChild(domainText);
            domainDiv.appendChild(deleteButton);
            listElement.appendChild(domainDiv);
        });
    });
}

document.getElementById('saveDomain').addEventListener('click', function () {
    const domain = document.getElementById('domainInput').value.trim();
    if (domain) {
        chrome.storage.local.get(['targetDomains'], function (result) {
            const domains = result.targetDomains || [];
            if (!domains.includes(domain)) {
                domains.push(domain);
                chrome.storage.local.set({ 'targetDomains': domains }, function () {
                    document.getElementById('domainInput').value = '';
                    updateDomainList();
                    alert('Domain saved!');
                });
            } else {
                alert('This domain is already in the list!');
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', updateDomainList);

