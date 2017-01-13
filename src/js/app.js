

mediaWikiUrl = "https://en.wikipedia.org/w/api.php",
playListUrl = "http://en.wikipedia.org/w/api.php?format=json&action=query&titles=India&prop=revisions&rvprop=content&callback=?"

var app = angular.module('WikipediaViewer', ['jtt_wikipedia']);

app.controller('WikipediaViewerController', [
    '$scope', '$http', '$window', 'wikipediaFactory', function ($scope, $http, $window, wikipediaFactory) {
        var randomArticleurl = "https://en.wikipedia.org/wiki/Special:Random";

        $scope.searchResults = [];
        $scope.searchString = '';

        $scope.showRandomArticle = function () {
            $window.open(randomArticleurl, "_blank");
        }

        $scope.search = function () {
            $scope.searchResults = wikipediaFactory.getArticle({
                term: $scope.searchString
            });
        }
    }
]);
