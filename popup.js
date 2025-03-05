document.getElementById("extract").addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["content.js"]
    }).then((results) => {
        let extractedText = results[0].result || "No numbers found!";
        document.getElementById("content").innerText = extractedText;
    });
});

document.getElementById("copy").addEventListener("click", () => {
    let content = document.getElementById("content").innerText;
    
    if (content.trim()) {
        navigator.clipboard.writeText(content).then(() => {
            alert("Copied to clipboard!");
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    } else {
        alert("No numbers to copy!");
    }
});