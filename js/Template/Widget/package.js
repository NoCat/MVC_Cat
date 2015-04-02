/// <reference path="../../include.js" />

MPTemplate.Widget.Package=function(data,options)
{
    options= options ? options : MPTemplate.Widget.Package.Options.BigButton;
    var strVar = "";
    strVar += "<div class=\"widget-package\">";
    strVar += "    <a class=\"previews\" href=\"{0}\">".Format(host + "/package/" + data.id);
    if (data.thumbs.length != 0)
    {
        strVar += "        <div class=\"thumbs\">";
        var n = data.thumbs.length;
        for (var i = 0; i < n; i++)
        {
            if (i == 0)
            {
                strVar += " <img class=\"cover\" src=\"{0}\" />".Format(imageHost + "/" + data.thumbs[0].file.hash + "_sq236");
            }
            else
            {
                strVar += " <img class=\"thumb\" src=\"{0}\" />".Format(imageHost + "/" + data.thumbs[i].file.hash + "_sq75");
            }
        }
        strVar += "        <\/div>";
    }
    strVar += "        <div class=\"borders\">";
    strVar += "            <div class=\"cover-border\"><\/div>";
    strVar += "            <div class=\"thumb-border\"><\/div>";
    strVar += "            <div class=\"thumb-border\"><\/div>";
    strVar += "            <div class=\"thumb-border\"><\/div>";
    strVar += "        <\/div>";
    strVar += "        <div class=\"over{0}\">".Format(data.thumbs.length == 0 ? " empty-package" : "");
    strVar += "            <h3>{0}<\/h3>".Format(data.title);
    strVar += "            <h4>{0}<\/h4>".Format(data.description);
    strVar += "        <\/div>";
    strVar += "    <\/a>";

    var fuser = MPFormat.User.New(data.user);
    strVar += "    <div class=\"actions\">";
    if (data.user.id == MPData.user.id)
    {
        strVar += "<div class=\"btn2 edit\" data-id=\"{0}\"><\/div>".Format(fuser.ID());
    }
    else
    {
        switch (options)
        {           
            case MPTemplate.Widget.Package.Options.SmallButton:
                strVar += "        <a class=\"avt\" href=\"{0}\">".Format(fuser.Home());
                strVar += "            <img src=\"{0}\" />".Format(fuser.Avt());
                strVar += "        <\/a>";
                strVar += "        <a class=\"username\" href=\"{0}\" >{1}<\/a>".Format(fuser.Home(), fuser.Name);
                if (data.user.followed === true)
                {
                    strVar += "        <div class=\"btn unfollow\" data-id=\"{0}\"><\/div>".Format(fuser.ID());
                }
                else
                {
                    strVar += "        <div class=\"btn follow\" data-id=\"{0}\"><\/div>".Format(fuser.ID());
                }
                break;
            case MPTemplate.Widget.Package.Options.BigButton:
                if (data.user.followed == true)
                {
                    strVar += "        <div class=\"btn2 unfollow\" data-id=\"{0}\"><\/div>".Format(fuser.ID());
                }
                else
                {
                    strVar += "        <div class=\"btn2 follow\" data-id=\"{0}\"><\/div>".Format(fuser.ID());
                }
                break;
        }
    }
    strVar += "<\/div>";

    return strVar;
}

MPTemplate.Widget.Package.Options = {
    SmallButton: 0,
    BigButton: 1
};