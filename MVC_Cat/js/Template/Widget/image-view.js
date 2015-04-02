/// <reference path="../../include.js" />
MPTemplate.Widget.ImageView = function (data,options)
{
    var fuser = MPFormat.User.New(data.user);
    var strVar = "";
    strVar += "<div class=\"image-view\">";
    strVar += "    <div class=\"main\">";
    strVar += "        <div class=\"image-piece piece\">";
    strVar += "            <div class=\"tool-bar\">";
    strVar += "                <div class=\"resave btn\" data-id=\"{0}\" data-hash=\"{1}\">转存<\/div>".Format(data.id, data.file.hash);
    strVar += "                <div class=\"edit btn\" data-id=\"{0}\" data-hash=\"{1}\">编辑<\/div>".Format(data.id, data.file.hash);
    strVar += "                <div class=\"delete btn\" data-id=\"{0}\" data-hash=\"{1}\">删除<\/div>".Format(data.id, data.file.hash);
    strVar += "            <\/div>";
    strVar += "            <div class=\"image\">";
    strVar += "                <img src=\"{0}\" />".Format(imageHost + "/" + data.file.hash + "_fw658");
    strVar += "            <\/div>";
    strVar += "            <div class=\"tool-bar-bottom\">";
    strVar += "                <div class=\"clear\"><\/div>";
    strVar += "            <\/div>";
    strVar += "        <\/div>";
    strVar += "          <div class=\"info-piece piece\">";
    strVar += "                <div class=\"info\">";
    strVar += "                    <a class=\"avt\" href=\"{0}\">".Format(fuser.Home());
    strVar += "                        <img src=\"{0}\" />".Format(fuser.Avt());
    strVar += "                    <\/a>";
    strVar += "                    <div class=\"info-main\">";
    strVar += "                        <a class=\"name\" href=\"{1}\">{0}<\/a>".Format(fuser.Name(), fuser.Home());
    strVar += "                    <\/div>";
    strVar += "                    <div class=\"sub\">";
    strVar += "                        收集于 {0}".Format(data.time);
    strVar += "                    <\/div>";
    strVar += "                <\/div>";
    if (data.description != "")
    {
        strVar += "                <div class=\"description\">{0}<\/div>".Format(data.description);
    }
    strVar += "                <div class=\"comments\">";
    var n = data.comments.length;
    for (var i = 0; i < n; i++)
    {
        var fuser1 = MPFormat.User.New(data.comments[i].user);
        strVar += "                    <div class=\"comment\">";
        strVar += "                        <a class=\"avt\" href=\"{0}\">".Format(fuser1.Home());
        strVar += "                            <img src=\"{0}\" />".Format(fuser1.Avt());
        strVar += "                        <\/a>";
        strVar += "                        <a class=\"name\">{0}<\/a>".Format(fuser1.Name());
        strVar += "                        <div class=\"text\">{0}<\/div>".FormatNoEncode(mentionConvert(data.comments[i].text, data.comments[i].mentions))
        strVar += "                    <\/div>";
    }
    strVar += "                <div class=\"add-comment\">";
    strVar += "                    <a class=\"avt\" href=\"{0}\">".Format(fuser.Home());
    strVar += "                        <img src=\"{0}\" />".Format(fuser.Avt());
    strVar += "                    <\/a>";
    strVar += "                    <div class=\"new-comment\">";
    strVar += "                        <textarea placeholder=\"请在这里输入评论内容\" ><\/textarea>";
    strVar += "                    <\/div>";
    strVar += "                    <div class=\"submit\">添加评论<\/div>";
    strVar += "                <\/div>";
    strVar += "                <div class=\"clear\"><\/div>";
    strVar += "            <\/div>";
    strVar += "        <\/div>";
    strVar += "    <\/div>";
    strVar += "    <div class=\"side\">";
    strVar += "        <div class=\"package-piece piece\">";
    strVar += "            <div class=\"info\">";
    strVar += "                <img class=\"avt\" src=\"{0}\" />".Format(fuser.Avt());
    strVar += "                <a class=\"title\" href=\"{1}\">{0}<\/a>".Format(data.package.title, "/package/" + data.package.id);
    strVar += "                <a class=\"username\" href=\"{1}\">{0}<\/a>".Format(fuser.Name(), "/user/" + fuser.ID());
    strVar += "            <\/div>";
    strVar += "            <div class=\"images\">";
    strVar += "                <div class=\"image-waterfall\">";
    strVar += "                <\/div>";
    strVar += "            <\/div>";
    strVar += "        <\/div>";
    strVar += "        <div class=\"ad-piece piece\">";
    strVar += "        <\/div>";
    strVar += "    <\/div>";
    strVar += "    <div class=\"bottom\"><\/div>";
    strVar += "<\/div>";
}