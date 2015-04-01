/// <reference path="../widget.js" />
MPWidget.Image.Options = {
    ShowUser: 0,
    ShowSource: 1
};

MPWidget.Image.Template = function (data, options)
{
    options = options ? options : this.Options.ShowUser;
    var fuser = MPFormat.User.New(data.user);
    var strVar = "";
    strVar += "<div class=\"widget-image\" data-id=\"{0}\">".Format(data.id);
    strVar += "    <div class=\"actions\">";
    strVar += "         <div class=\"left\">";
    strVar += "             <div class=\"repin\" title=\"转存到我的图包\" data-id=\"{0}\" data-hash=\"{1}\" data-description=\"{2}\">转存<\/div>".Format(data.id, data.file.hash, data.description);
    strVar += "         <\/div>";
    if (data.user.id == MPData.user.id)
    {
        strVar += "<div class=\"right\">";
        strVar += "    <div class=\"edit\" title=\"编辑\" data-id=\"{0}\" data-hash=\"{1}\" data-description=\"{2}\" >编辑<\/div>".Format(data.id, data.file.hash, data.description);
        strVar += "<\/div>";
    }
    else
    {
        strVar += "<div class=\"right\">";
        strVar += "    <div class=\"praise\" title=\"赞一个\" data-id=\"{0}\" >赞<\/div>".Format(data.id);
        strVar += "<\/div>";
    }
    strVar += "    <\/div>";
    strVar += "    <a class=\"img\" href=\"{0}\">".Format("/image/" + data.id);
    strVar += "        <img src=\"{0}\" width=\"236\" height=\"{1}\" />".Format(imageHost + "/" + data.file.hash + "_fw236", Math.ceil(236 * data.file.height / data.file.width));
    strVar += "        <div class=\"cover\"><\/div>";
    strVar += "    <\/a>";
    strVar += "    <div class=\"description\">{0}<\/div>".FormatNoEncode(this.Description(data.description));
    strVar += "    <div class=\"info\">";
    if (options == this.Options.ShowUser)
    {
        strVar += "        <a class=\"avt\" href=\"{0}\">".Format(fuser.Home());
        strVar += "            <img src=\"{0}\" />".Format(fuser.Avt());
        strVar += "        <\/a>";
        strVar += "        <div class=\"text\">";
        strVar += "            <div class=\"line\"><a href=\"{0}\">{1}<\/a><span>收集到<\/span><\/div>".Format(fuser.Home(), fuser.Name());
        strVar += "            <div class=\"line\"><a href=\"{0}\">{1}<\/a><\/div>".Format("/package/" + data.package.id, data.package.title);
        strVar += "        <\/div>";
    }
    else if (options == this.Options.ShowSource)
    {
        strVar += "<a class=\"source\" href=\"/from/{0}\">{0}<\/a>".Format(data.host);
    }
    strVar += "    <\/div>";
    strVar += "<\/div>";

    return strVar;
}