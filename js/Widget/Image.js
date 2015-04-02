/// <reference path="../include.js" />

MPWidget.Image.Description = function (description)
{
    description = MPHtmlEncode(description);
    return description.replace(/(#.*#)/g, function (word)
    {
        var w = $.trim(word.substring(1, word.length - 1));
        if (w == "")
            return word;

        return "<a href=\"/search/{0}\">{1}</a>".FormatNoEncode(encodeURIComponent(w), word);
    });
};
MPWidget.Image.New = function (image,options)
{
    return $(MPTemplate.Widget.Image(image,options));
};
MPWidget.Image.Bind = function ()
{
    //点击编辑按钮
    $(document).on("click", ".widget-image .edit", edit_click)
        //点击转存按钮
    .on("click", ".widget-image .repin", repin_click)
        //点击赞按钮
    .on("click", ".widget-image .praise", praise_click)
        //点击取消赞
    .on("click", ".widget-image .unpraise", unpraise_click)
        //点击图像,点击了以后阻止a标签的click,防止页面跳转,并显示图片,这个函数暂时先不实现
    .on("click", ".widget-image a.img", img_click)
        //鼠标进入,显示action
    .on("mouseenter", ".widget-image", mouse_enter)
        //鼠标离开,隐藏action
    .on("mouseleave", ".widget-image", mouse_leave);

    function edit_click()
    {
        var t = $(this);
        var hash = t.attr("data-hash");
        var description = t.attr("data-description")
        MPCreateImageDialog.New(imageHost + "/" + hash + "_fw236", "编辑图片", description, true, "www.baidu.com");
    }

    function img_click(e)
    {
        //防止浏览器跳转
        e.preventDefault();
        var viewerWindow = $(".widget_window");
        if (viewerWindow.length == 0)
        {
            var viewerWindow = MPWidget.Window.New();
            var body = $("body");
            viewerWindow.onClose = function ()
            {
                body.removeAttr("style");
            }
            $("body").append(viewerWindow).css("overflow", "hidden");
        }
        viewerWindow.Init($(this).parents(".widget-image"));
    }

    function repin_click()
    {
        var t = $(this);
        var id = t.attr("data-id");
        var hash = t.attr("data-hash");
        //获取要转存图片的描述内容用作初始描述
        var description = t.attr("data-description");
        var dialog = MPCreateImageDialog.New(imageHost + "/" + hash + "_fw236", "转存", description);
        dialog.onOK = function ()
        {
            $.post(host + "/ajax/resave", { image_id: id, package_id: dialog.packageId, description: MPHtmlEncode(dialog.description) }, function (data)
            {
                if (data.code == 0)
                {
                    var box = MPMessageBox.New("ok", "转存成功");
                    box.onOK = function ()
                    {
                        dialog.Close();
                    }
                    //转存成功后的处理,默认提示成功后一秒钟关闭
                }
            }, "json");
            //进行转存,见ajax文档```````````
        };
    }

    function praise_click()
    {
        var id = $(this).attr("data-id");
        $.post(host + "/ajax/praise-image", { iamge_id: id }, function (data)
        {
            if (data.code == 0)
            {
                $(this).removeClass("praise");
                $(this).addClass("unpraise");
            }
        }, "json");
    }

    function unpraise_click()
    {
        var id = $(this).attr("data-id");
        $.post(host + "/ajax/unpraise-image", { image_id: id }, function (data)
        {
            if (data.code == 0)
            {
                $(this).removeClass("unpraise");
                $(this).addClass("praise");
            }
        }, "json");
    }

    function mouse_enter()
    {
        $(this).find(".actions").show();
    }

    function mouse_leave()
    {
        $(this).find(".actions").hide();
    }
};
