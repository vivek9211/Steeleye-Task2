let htmlContent = '<p><span>Hi David<br><br>Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects<br><br>Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar…<br><br>Read the full article <a href="https://content.seleritycorp.com/hosted/assets/www/UKMW47_hYz_RGzPSpHm44Hi1L49HdNBhs1OkKKW2OPI">here</a><br><br>-------------------------------------<br><br>You received this because you are subscribed to news related to <a href="https://iris.steeleye.co/market/instruments?search=ES0113900J37">ES0113900J37</a>, and this story was marked as 82% relevant.<br><br>Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. <br><br>To unsubscribe change your email preferences, please click <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">here</a>.<br><br>-------------------------------------<br><br><img src="https://context.seleritycorp.com/selerity/assets/sc_icons/pressRelease.png" alt="Rick Astley" style="width:100px;height:100px;"></span></p>';
let plainText;
let plainTextPositions = [
    {
        start: 241,
        end: 247,
    },
    {
        start: 518,
        end: 525,
    },
    
];

function getPlainText(htmlContent) {
  const tempElement = document.createElement('div');
  tempElement.innerHTML = htmlContent;
  return tempElement.textContent || tempElement.innerText;
}


function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
    plainText = getPlainText(htmlContent).trim();

    function escapeRegExp(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    
    plainTextPositions.forEach(({ start, end }) => {
        const word = plainText.substring(start, end);
        console.log(word);
        const regex = new RegExp(`(${escapeRegExp(word)})`, 'gi');
        htmlContent = htmlContent.replace(regex, '<mark>$1</mark>');
    });
    const highlightedElement = document.createElement('div');
    highlightedElement.innerHTML = htmlContent;
    const ele = document.getElementById("elements");
    ele.appendChild(highlightedElement);
}


highlightHTMLContent(htmlContent, plainText, plainTextPositions);

