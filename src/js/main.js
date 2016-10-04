var mgr = {
    randomArticleurl: "https://en.wikipedia.org/wiki/Special:Random",
    mediaWikiUrl: "https://en.wikipedia.org/w/api.php",
    playListUrl: "http://en.wikipedia.org/w/api.php?format=json&action=query&titles=India&prop=revisions&rvprop=content&callback=?",

    showRandomArticle: function() {
        window.open(this.randomArticleurl, "_blank");
    },

    search: function() {
        $.getJSON(this.playListURL, function (data) {
            var hash = data;
            var page_value = "";
            $.each(data["query"]["pages"], function (k, v) {
                console.log(k);
                $.each(v, function (key, val) {
                    console.log(key);
                });
            });
        });
    }
};