/// <reference path="../../include.js" />

MPTemplate.Page.Search = function (data, options)
{
    var strVar = "";
    strVar += "<div class=\"page-search\">";
    strVar += "    <div class=\"bar\">";
    strVar += ("        <a class=\"item on\" href=\"/search/{0}\">图片<\/a>"
    + "        <a class=\"item\" href=\"/search/package/{0}\">图包<\/a>"
    + "        <a class=\"item\" href=\"/search/user/{0}\">用户<\/a>").Format(encodeURIComponent(MPData.keyword));
    strVar += "    <\/div>";
    strVar += "    <div class=\"waterfall\"><\/div>";
    strVar += "<\/div>";

    return strVar;
}