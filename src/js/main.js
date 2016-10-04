var mgr = {
    randomArticleurl: "https://en.wikipedia.org/wiki/Special:Random",
    mediaWikiUrl: "https://en.wikipedia.org/w/api.php",
    playListUrl: "http://en.wikipedia.org/w/api.php?format=json&action=query&titles=India&prop=revisions&rvprop=content&callback=?",

    showRandomArticle: function() {
        window.open(this.randomArticleurl, "_blank");
    },

    search: function(titles) {
        $.getJSON('http://en.wikipedia.org/w/api.php?format=json&action=query&titles=' + titles + '&prop=revisions&rvprop=content&callback=?', function(data) {
            var hash = data;
            var page_value = "";
            $.each(data["query"]["pages"], function(k, v) {
                appendData(k, v);
            });
        });
    }
};

function appendData(k, v) {
    var target = $(".results");
    target.empty();
    target.append('<li>' + 'key=' + k + 'val=' + v + '</li>');
}
$(document).ready(function() {
    $(".search").on('click', function() {
        var titles = $("input").val();
        mgr.search(titles)
    });
});