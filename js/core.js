
// Used a function so now you don't have to refresh the page to display a random quote
function randomQ() {
    "use strict";

    // This line of code defines a random number from 1 to the length of the quotes array
    var i = Math.floor(Math.random() * quo.length),
      qChoosen = quo[i],
      separate = qChoosen.split("|"), // splits the quote and the tags
      sq = separate[0], // quote
      st = separate[1], // tags
      quote = sq.split("//"), // splits the quote in sections
      favourite = "fav",
      quoteT = quote[0], // Gets the Quote
      quoteB = quote[1], // Gets the Author
      referal = quote[2], // Gets the referral
      authorNReferal,
      quoteLoved = localStorage.getItem("lovedUS"),
      quoteLovedArray = quoteLoved.split(","),
      social = quote[3], // Gets the social network will be used
      fav = quote[4]; // Gets if the quote is one of the Developers Favourite


    // If the referral is not defined only the quote and the author will be outputed
    if (referal === undefined) {
        authorNReferal = quoteB;
    } else {
        // If it is will output the refferal and the social network link
        // If one of the elements on the qChoosen array has fav on it it will pass through all this if-statement
        if (quoteT == "fav" || referal == "fav" || social == "fav" || fav == "fav") {
            switch (social) {
            case "tumblr":
                authorNReferal = quoteB + " | " + '<a href="http://www.' + referal + refTu + '" target="_blank">' + referal + '</a><span class="dev_fav" title="Favorite of the Developer"></span>';
                break;
            case "facebook":
                authorNReferal = quoteB + " | " + '<a href="' + refFb + referal + '" target="_blank">' + referal + '</a><span class="dev_fav" title="Favorite of the Developer"></span>';
                break;
            case "twitter":
                authorNReferal = quoteB + " | " + '<a href="' + refTw + referal + '" target="_blank">' + referal + '</a><span class="dev_fav" title="Favorite of the Developer"></span>';
                break;
            case "behance":
                authorNReferal = quoteB + " | " + '<a href="' + refBe + referal + '" target="_blank">' + referal + '</a><span class="dev_fav" title="Favorite of the Developer"></span>';
                break;
            case "youtube":
                authorNReferal = quoteB + " | " + '<a href="' + refYt + referal + '" target="_blank">' + referal + '</a><span class="dev_fav" title="Favorite of the Developer"></span>';
                break;
            case undefined:
                if (referal == "fav") {
                    authorNReferal = quoteB + '<span class="dev_fav" title="Favorite of the Developer"></span>';
                } else {
                    authorNReferal = quoteB + " | " + referal + '<span class="dev_fav" title="Favorite of the Developer"></span>';
                }
                break;
            };

        } else {
            switch (social) {
            case "tumblr":
                authorNReferal = quoteB + " | " + '<a href="http://www.' + referal + refTu + '" target="_blank">' + referal + '</a>';
                break;
            case "facebook":
                authorNReferal = quoteB + " | " + '<a href="' + refFb + referal + '" target="_blank">' + referal + '</a>';
                break;
            case "twitter":
                authorNReferal = quoteB + " | " + '<a href="' + refTw + referal + '" target="_blank">' + referal + '</a>';
                break;
            case "behance":
                authorNReferal = quoteB + " | " + '<a href="' + refBe + referal + '" target="_blank">' + referal + '</a>';
                break;
            case "youtube":
                authorNReferal = quoteB + " | " + '<a href="' + refYt + referal + '" target="_blank">' + referal + '</a>';
                break;
            case undefined:
                if (referal == "fav") {
                    authorNReferal = quoteB;
                } else {
                    authorNReferal = quoteB + " | " + referal;
                }
                break;
            };
        }
    };
    // This two lines define the elements where the quote will be written
    cite.innerHTML = quoteT;
    author.innerHTML = authorNReferal;
    var quoteSharer = quoteT,
        quoteSharer = encodeURIComponent(quoteSharer.trim()),
        tN = "Too long to share ;( | " + quoteT.length,
        tY = "Share me :) | " + quoteT.length,
        slash = " -",
        l = " @";

    if ((quoteT.length + slash.length + quoteB.length) >= 141) {
        twitter.href = "";
        twitter.className = "disabled";
        twitter.title = tN;
        twitter.target = "";
    } else if ((quoteT.length + slash.length + quoteB.length) <= 140) {
        twitter.href = "https://twitter.com/intent/tweet?text=" + quoteSharer + "%20-" + quoteB;
        twitter.className = "";
        twitter.title = tY;
        twitter.target = "_blank";
    }
    tinyQuotes.innerHTML = "tiny Quote";
    tinyQuotes.addEventListener("focus", function () {
        var a = "Share this quote :)";
        tinyQuotes.innerHTML = "http://anchorer.bugs3.com/us/#" + uHash || i;
        tinyQuotes.title = a;
    });
    tinyQuotes.addEventListener("blur", function () {
        tinyQuotes.innerHTML = "tiny Quote";
    });
    tumblr.href = "http://www.tumblr.com/share/link?description=" + quoteSharer + "%20-" + quoteB + " | @" + referal;
    tumblr.title = "Share me :)";

    tags.innerHTML = "";
    var tsplited = st.split(","),
        z = 0,
        o = 0;
    if (st > "" || st.length > 0) {
        do {
            tags.innerHTML += "<span id =z" + z + ">" + tsplited[z] + "</span>";
            if (legends.indexOf(tsplited[z]) != -1) {
                document.getElementById(("z" + z)).setAttribute("class", "legends");
                document.getElementById(("z" + z)).title = "tag on the Legendarium.";
            };
            document.getElementById(("z" + z)).setAttribute("onclick", "tag('" + tsplited[z] + "')");
            z += 1;
        } while (z <= (tsplited.length - 1));
    };

    if (quoteLoved === null) {
        localStorage.setItem("lovedUS", "");
        loving.setAttribute("class", "toLove");
    } else {
        var searchLove = quoteLovedArray.indexOf(uHash || i + ",");
        if (searchLove != -1) {
            loving.setAttribute("class", "loving");
            console.warn("loved " + uHash || i);
        } else if (searchLove == -1) {
            loving.setAttribute("class", "toLove");
            console.warn("not loved. " + uHash || i);
        };
    };

    if (screen.width >= 961) {
        if (quoteT.length >= 140) {
            cite.style.fontSize = "2em";
        } else if (quoteT.length >= 200) {
            cite.style.fontSize = "1.7em";
        } else {
            cite.style.fontSize = "2.5em";
        };
    };

    aClass("more", "more");
    setTimeout(function () {
        location.hash = "";
    }, 100);
    // return the value of i (the random number) to use it on love()
    return selectedQ = (uHash || i);
};

// Set interval to show a new random quote every 60 seconds
var quoteInterval = setInterval(daInterval, 60000);

// Every certain minutes the console will be cleared and will be printed a message
function daInterval() {
    randomQ();
    msg++;
    switch (msg) {
    case 1:
        console.clear();
        console.info("Thanks for staying 1 minute with us :')");
        break;
    case 2:
        console.clear();
        console.info("TWO minutes. You like our quotes.");
        break;
    case 3:
        console.clear();
        console.info("THREE? Are you a bot?");
        break;
    case 10:
        console.clear();
        console.info("TEN minutes? You are one of us :)");
        break;
    };
}

// Function to love/add a quote on your favourite(locally)
function love() {
    var choose = selectedQ || uHash,
        quoteLoved = localStorage.getItem("lovedUS");
    if (quoteLoved === null) {
        localStorage.setItem("lovedUS", choose + ",");
    } else {
        var lovedQ = quoteLoved.indexOf(choose + ",");
        if (lovedQ != -1) {
            var deleteOne = localStorage.getItem("lovedUS"),
                findToDelete = deleteOne.search(choose + ",");
            console.warn("Already Loved " + choose);
        } else if (lovedQ === -1) {
            localStorage.setItem("lovedUS", quoteLoved + choose + ",");
            console.info("Loved quote: " + selectedQ);
            document.getElementById("love").setAttribute("class", "loving");
        };
    };
};

// If the hash on the URL has changed it will do different things
function updateInfo() {
    var daHash = location.hash.substring(1),
        quoteLoved = localStorage.getItem("lovedUS"),
        favA = quoteLoved.split(",");
    if (daHash == "home" || daHash == "") {
        wrapper.style.display = "block";
    } else if (daHash == "about") {
        wrapper.style.display = "none";
    } else if (daHash.search("restore") != -1) {
        var rest = location.hash.substring(9);
        localStorage.setItem("quoteLoved", rest);
    } else if (daHash.search("qr") != -1) {
        var quote = localStorage.getItem("lovedUS"),
            restoreEl = document.getElementById("restore");
        restoreEl.style.display = "block";
        if (quote.length == 0) {
            restoreEl.innerHTML = "You don't have quotes to restore :'";
        } else {
            restoreEl.innerHTML = " " + window.location.protocol + window.location.host + window.location.pathname + "#restore-" + quote;
        };
        location.hash = "";
    };

};


// Checks the url if has changes
setInterval(updateInfo, 500);

window.addEventListener("load", randomQ, false);

// When R key is pressed a random quote will be shown
window.addEventListener("keydown", checkKeyPressed, false);

// When R key is pressed a random quote will be shown
search.addEventListener("keydown", searchFav, false);

// Event listener to catch a click on overlay
document.getElementById("overlay").addEventListener("click", hide);

window.addEventListener("load", function () {

    if (localStorage.getItem("themePreference") == "dark") {
        document.body.setAttribute("class", "dark");
        aClass("toggleTheme", "active");
    };

}, false);

document.getElementById("post").addEventListener("click", function () {
    var ins = document.createElement("section"),
        form = document.getElementById("form"),
        text = form.getElementsByTagName("input")[0],
        daAuth = form.getElementsByTagName("input")[1],
        mention = form.getElementsByTagName("input")[2],
        social = form.getElementsByTagName("select")[0],
        current = document.getElementById("pendingC"),
        section = document.getElementsByTagName("section")[0],
        pending = localStorage.pending,
        toAdd = text.value + "//" + daAuth.value + "//" + mention.value + "//" + social.value.toLowerCase(),
        toOpen = "mailto:amiguencio@icloud.com?subject=" + daAuth.value + "[quote]&body=" + text.value;
    ins.innerHTML = "<cite class='added'>" + text.value.substr(0, 60) + "</cite>";
    if (text.value.length >= 6 && daAuth.value.length >= 6 && mention.value.length >= 6) {
        if (localStorage.getItem("pending") === null) {
            localStorage.setItem("pending", (toAdd));
            current.insertBefore(ins, section);
        } else if (localStorage.getItem("pending")) {
            localStorage.setItem("pending", (localStorage.getItem("pending") + "|" + toAdd));
            text.value = "";
            daAuth.value = "";
            mention.value = "";
            current.insertBefore(ins, section);
            window.location.href = toOpen;
        };
    } else {
        alert("fill all the form");
    };
});

favs.addEventListener("click", function () {
    modal.className = "modal modals";
    overlay.style.display = "block";
    search.className = "fav_search searchd";
    sharer.style.display = "block";
    modal.innerHTML = "";

    var quoteLoved = localStorage.getItem("lovedUS"),
        onFavs = quoteLoved.split(",");
    var i = 0;
    do {
        var getFromQuotesDB,
            zero;
        if (onFavs[i] == "") {
            getFromQuotesDB = quo[0];
        } else {
            getFromQuotesDB = quo[onFavs[i]];
        };
        var separateTheQuote = getFromQuotesDB.split("|"),
            getTheTextFromSeparation = separateTheQuote[0],
            getTheTagsFromSeparation = separateTheQuote[1],
            splitTheText = getTheTextFromSeparation.split("//"),
            splitedQuote = splitTheText[0],
            splitedAuthor = splitTheText[1],
            splitTheTags = getTheTagsFromSeparation.split(","),
            splitedTagsWithElement,
            y = 0;
        modal.innerHTML = modal.innerHTML + "<section>" + "<cite contenteditable='true' spellcheck='false'>" + splitedQuote + "</cite>" + "<p><a onclick='location.reload()' href='#" + onFavs[i] + "'>" + splitedAuthor + "</a></p>" + "</section>";
        i++;
    } while (i <= (onFavs.length - 1));
});

function hide() {
    if (searchOn == true) {
        mQT.className = "modal modalh";
        sQT.className = "fav_search searchHide";
        setTimeout(function () {
            sQT.className = "fav_search";
            mQT.className = "modal";
            mQT.innerHTML = "";
        }, 360);
    } else if (searchOn == false || searchOn == undefined) {
        modal.className = "modal modalh";
        search.className = "fav_search searchHide";
        setTimeout(function () {
            search.className = "fav_search";
            modal.className = "modal";
        }, 360);
    };
    overlay.style.display = "none";
    sharer.style.display = "none";
    search.value = "";
    sQT.value = "";
    return pressed = false, searchOn = false;
}

// Clicking R will clear the interval and display another random quote
function checkKeyPressed(e) {
    // Random quote
    if (pressed === undefined || pressed === false) {
        if (e.keyCode == "82") {
            clearInterval(quoteInterval);
            quoteInterval = setInterval(daInterval, 60000);
            randomQ();
            // Love quote
        } else if (e.keyCode == "70") {
            // Clicking L or F will add the quote to your favourites.
            love();
        };
    };
}

function searchFav() {
    var searchVal = search.value,
        quoteLoved = localStorage.getItem("lovedUS"),
        favA = quoteLoved.split(",");
    modal.innerHTML = "";
    for (var i = 0; i < (favA.length - 1); i++) {
        var favQ = favA[i],
            favQuotes = quo[favQ],
            s = favQuotes.split("//"),
            t = s[0],
            tTL = t.toLowerCase(),
            a = s[1];
        if (tTL.indexOf(searchVal) != -1) {
            modal.innerHTML = modal.innerHTML + "<section>" + "<cite contenteditable='true' spellcheck='false'>" + s[0] + "</cite>" + "<p><a onclick='location.reload()' href='#" + favQ + "'>" + s[1] + "<span class='dev_fav'></span>" + "</a></p>" + "</section>";
        };
    };
    return pressed = true;

};

sQT.addEventListener("keydown", find, false);

function find() {
    // Añadir un if para diferenciar de # a texto
    mQT.innerHTML = "";
    for (var i = 0; i < quo.length; i++) {
        var qsplit = quo[i].split("|"),
            q = qsplit[0],
            qa = q.split("//"),
            qtext = qa[0],
            qTextToLowerCase = qtext.toLowerCase(),
            qauthor = qa[1],
            tags = qsplit[1],
            ta = tags.split(",");
        if (sQT.value.indexOf("#") != -1) {
            if (tags.indexOf(sQT.value.substring(1, (sQT.value.length))) != -1) {
                mQT.innerHTML += "<section>" + "<cite contenteditable='true' spellcheck='false'>" + qtext + "</cite>" + "<p>" + qauthor + "</p>" + "</section>";
            };
        } else {
            if (qTextToLowerCase.indexOf(sQT.value.toLowerCase()) != -1) {
                mQT.innerHTML += "<section>" + "<cite contenteditable='true' spellcheck='false'>" + qtext + "</cite>" + "<p>" + qauthor + "</p>" + "</section>";
            };
        };
    };
    return pressed = true;
};

function searchQT(a) {
    var a = a;
    mQT.innerHTML = "";
    if (a == undefined || a == null) {
        mQT.className = "modal modals";
        overlay.style.display = "block";
        sQT.className = "fav_search searchd";
    } else if (a) {
        if (searchOn) {
            find(a);
        } else if (searchOn == undefined || searchOn == null || searchOn == "") {
            mQT.className = "modal modals";
            overlay.style.display = "block";
            sQT.className = "fav_search searchd";
            sQT.value = a;
            find(a);
        };
    };
    return searchOn = true;
};

function tag(a) {
    var tag = a;
    daTag.setAttribute("class", "daTag daTag-open");
    wrapper.setAttribute("class", "wrapper wr-open");
    tOverlay.setAttribute("class", "tOverlay tol-open");
    iframe.setAttribute("src", ("./tags/tags.html#" + a));
    tOverlay.addEventListener("click", function () {
        wrapper.setAttribute("class", "wrapper");
        this.setAttribute("class", "tOverlay tol-closed");
        daTag.setAttribute("class", "daTag daTag-closed");
    });
};

function aClass(e, c) {
    var el = document.getElementById(e);
    el.setAttribute("class", c);
};

var longLove,
    loveDiv = document.getElementById("love-div"),
    x,
    y,
    coorTO;

function lovePop(e) {
    x = e.pageX;
    y = e.pageY;
    loveDiv.style.left = (x + 10) + "px";
    loveDiv.style.top = (y + 10) + "px";
};

cite.addEventListener("mousedown", function () {
    aClass("love-div", "showing progress");
    loveDiv.addEventListener("mousemove", lovePop(event));
    clearTimeout(coorTO);
    longLove = window.setTimeout(function () {
        aClass("love-div", "hide done");
        aClass("love-pop", "l-pop");
        setTimeout(function () {
            aClass("love-pop", "");
        }, 800);
        love();
    }, 1000);
    return false;
});

cite.addEventListener("mouseup", function () {
    clearTimeout(longLove);
    aClass("love-div", "hide cancelled");
    return false;
});

more.addEventListener("click", function () {
    tags.scrollLeft = tags.scrollWidth;
    aClass("more", "more active");
});

toggleTheme.addEventListener("click", function () {
    if (localStorage.getItem("themePreference") == undefined) {
        localStorage.setItem("themePreference", "light");
        aClass("toggleTheme", "");
    } else {
        if (localStorage.getItem("themePreference") == "light") {
            document.body.setAttribute("class", "dark");
            localStorage.setItem("themePreference", "dark");
            aClass("toggleTheme", "active");
        } else if (localStorage.getItem("themePreference") == "dark") {
            document.body.setAttribute("class", "");
            localStorage.setItem("themePreference", "light");
            aClass("toggleTheme", "");
        };
    };
});
