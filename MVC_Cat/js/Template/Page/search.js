/// <reference path="../../include.js" />

MPTemplate.Page.Search = function (data, options)
{
    var strVar = "";
    strVar += "<div class=\"page-search\">";
    strVar += "    <div class=\"bar\">";
    strVar += "        <a class=\"item {1}\" href=\"/search/{0}\">图片<\/a>".Format(encodeURIComponent(MPData.keyword), MPData.sub1 == "" ? "on" : "");
    strVar += "        <a class=\"item {1}\" href=\"/search/package/{0}\">图包<\/a>".Format(encodeURIComponent(MPData.keyword),MPData.sub1 == "package" ? "on" : "");
    strVar += "        <a class=\"item {1}\" href=\"/search/user/{0}\">用户<\/a>".Format(encodeURIComponent(MPData.keyword),MPData.sub1 == "user" ? "on" : "");
    strVar += "    <\/div>";
    strVar += "    <div class=\"waterfall\"><\/div>";
    strVar += "<\/div>";

    return strVar;
}