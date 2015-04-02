/// <reference path="../include.js" />

$(function ()
{
    var frame = MPWidget.Frame.New();
    frame.Body.append(MPTemplate.Page.Search());
    $("body").append(frame);
})