(() => {
    let div = document.querySelector(".x78zum5.x1cy8zhl.xisnujt.x1nxh6w3.xcgms0a.x16cd2qt");
  
    if (div) {
      let extractedContent = div.innerText;
      
      // Extract phone numbers with optional "+" at the start
      let phoneNumbers = extractedContent.match(/\+?\d{1,3} \d{5} \d{5}/g);
      
      return phoneNumbers ? phoneNumbers.join("\n") : "No numbers found!";
    } else {
      return "Div not found on this page.";
    }
  })();
  