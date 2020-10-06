// Based on http://community.village.virginia.edu/etst/

export function setupTextSync() {

    // "media" is undefined if there are no AV files associated with the current text. 
    // Holly's change on Oct 5, 2020: 
    // This block used to be a try-catch block, I changed it so that when there are no AV files
    // this block doesn't throw any error to the console. 
    const media = document.querySelectorAll("[data-live='true']")[0];
    let ts_tag_array = []; // Array that stores all timestamps/sentence id
    let ts_start_time_array = [];
    let ts_stop_time_array = [];

    if (media) {
        // For files with AV files, link the media file with the syncing functions.
        media.setAttribute("ontimeupdate", "sync(this.currentTime)");
        media.setAttribute("onclick", "sync(this.currentTime)");
        // For each sentence, sets up the sentence's start and end time. 
        ts_tag_array = document.getElementsByClassName("labeledTimeBlock");
        for (var i = 0; i < ts_tag_array.length; i++) {
            ts_start_time_array[i] = ts_tag_array[i].getAttribute("data-start_time");
            ts_stop_time_array[i] = ts_tag_array[i].getAttribute("data-end_time");
        }
    } else {
        ts_tag_array = document.getElementsByClassName("untimedBlock");
    }

    /* Scrolls to a selected sentence. */
    function scrollIntoViewIfNeeded(target) {
        var rect = target.getBoundingClientRect();
        if (rect.bottom > window.innerHeight) {
            target.scrollIntoView(false);
        }
        if (rect.top < 0) {
            target.scrollIntoView();
        } 
    }

    /* Sync function for files with AV */
    window.sync = function sync(current_time) {
        for (var i=0; i<ts_tag_array.length; i++) {
            // Somewhat hacky solution: decrease current_time by 0.001 to avoid highlighting before player starts
            if ((current_time-0.001 >= parseFloat(ts_start_time_array[i])/1000.0) && (current_time <= parseFloat(ts_stop_time_array[i])/1000.0)) {
                ts_tag_array[i].setAttribute("id", "current");
                scrollIntoViewIfNeeded($("#current")[0]);
                changeSentenceColorToHighlight(i); 
            }
            else {
                changeSentenceColorToNormal(i);
                try { ts_tag_array[i].removeAttribute("id"); }
                catch (err) { }
            }
        }
    }

    /* Two functions that change the color of a sentence to either highlight or normal. */
    function changeSentenceColorToHighlight(timestampIndex) {
        ts_tag_array[timestampIndex].style.backgroundColor = "rgb(209, 200, 225)";
    }
    function changeSentenceColorToNormal(timestampIndex) {
        ts_tag_array[timestampIndex].style.backgroundColor = "transparent";
    }

    /* OnClick function for each timestamp */
    $(".timeStamp").click(function() {
        const newTime = $(this).data('start_time');
        if (newTime) {
            updateTimestampQuery(newTime);
            setMediaCurrentTime(newTime);
        } else {
            // A file without AV files will not have newTime associated with each sentence.
            // In this case, use the sentence id as part of the new URL after selecting a sentence. 
            const sentId = $(this).data('sentence_id');
            updateForUntimedFile(sentId);
        }
        // document.location.search = $(this).data('start_time');
    });

    /* For files without AV, change the selected sentence's color and scroll to it. */
    function updateForUntimedFile(sentId) {
        for (var i = 0; i < ts_tag_array.length; i++) {
            // sentence id starts with 1
            if (i+1 == sentId) {
                ts_tag_array[i].setAttribute("id", "current");
                scrollIntoViewIfNeeded($("#current")[0]);
                changeSentenceColorToHighlight(i);
            } else {
                changeSentenceColorToNormal(i);
            }
        }
        updateTimestampQuery(sentId);
    }

    // I/P: t, an integer number of milliseconds
    // O/P: the player updates to the given time
    // Status: untested
    // This function adjusts the AV file(s)' timestamp according to the 
    // selected sentence's URL
    function setMediaCurrentTime(t) {
        // Change by Holly, October 3, 2020: I moved the updateTimestampQuery call to 
        // be part of the onclick of .timeStamp.
        // Also, I removed the try-catch block so that no error is thrown for non-AV files. 
        const media = $("[data-live='true']").get(0);
        if (media) {
            media.currentTime = (t + 2) / 1000;
        }
        // try {
        //     const media = $("[data-live='true']").get(0);
        //     media.currentTime = (t + 2) / 1000;
        // }
        // catch(err) {
        //     console.log(err);
        //     console.log("We think you tried to jump to time before the MEDIA element was created.")
        // }
    }

    /* Updates the URL according to a sentence's index id. */
    function updateTimestampQuery(newSentenceIndex) {
        if (window.history.replaceState) {
            // const newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.hash.replace(/\?.*$/, ''); // hacky...

            // (Holly:) The original code had -1 in the timestamp after ? --- why is this -1 necessary? 
            const newurl = window.location.href.replace(/\?.*$/,'') + `?${newSentenceIndex}`; // hacky...
            window.history.replaceState({ path: newurl }, '', newurl);
        }
    }


    // Jump to timestamp:
    // Source: http://snydersoft.com/blog/2009/11/14/get-parameters-to-html-page-with-javascript/
    $( document ).ready(function() {
        // This sentenceTimestampId is the timestamp for a file with AV, 
        // and a sentence id for a file without AV. 
        let query_index = document.URL.indexOf("?");
        let sentenceTimestampId = Number(document.URL.substr(query_index+1));
        if (isFinite(sentenceTimestampId)) {
            // startTime = startTime + 3 // do not remove (result of hacky solution further up in this file)
            // const media = $("[data-live='true']").get(0);
            
            // let hasRun = false;
            // media.oncanplay = function () {
            //     if (hasRun) return;
            //     hasRun = true;
            //     this.currentTime = startTime / 1000;
            // }
            //console.log(startTime);
            //jumpToTime(startTime);
            //console.log(document.getElementById(startTime));

            if (media) {
                setMediaCurrentTime(sentenceTimestampId + 1);
            } else {
                updateForUntimedFile(sentenceTimestampId);
            }
            
        }
    });

    
}