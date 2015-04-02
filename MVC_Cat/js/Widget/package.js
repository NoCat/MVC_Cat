﻿/// <reference path="../include.js" />

MPWidget.Package.New = function (packageDetail, type)
{
    var res = $(MPTemplate.Widget.Package(packageDetail,type));
    return res;
}

MPWidget.Package.Bind = function ()
{
    //编辑点击(图包是自己时)
    $(document).on("click", ".widget-package .edit", edit_click)
        //点击关注
      .on("hover", "widget-package .unfollow", unfollow_hover)
        //鼠标悬停在"已关注"按钮上的反应
    .on("click", ".widget-package .follow", follow_click)
        //点击取消关注
    .on("click", ".widget-package .unfollow", unfollow_click);

    function edit_click()
    {
        //提取id
        var id = $(this).attr("data-id");
        location.href = "/package/" + id + "/edit";
        //跳转到编辑页
    }

    function follow_click()
    {
        var id = $(this).attr("data-id");
        $.post(host + "/ajax/follow", { package_id: id }, function (data)
        {
            if (data.code == 0)
            {
                $(this).removeClass("follow-package");
                $(this).addClass("unfollw");
                $(this).text("已关注");
                MPMessageBox.New(MPMessageBox.Icons.OK, "关注成功!");
            }
        }, "json");
    }//关注操作

    function unfollow_hover()
    {
        $(this).text("取消关注");
    }//鼠标指到"已关注"按钮上,文本变成"取消关注"

    function unfollow_click()
    {
        var box = MPMessageBox.New(MPMessageBox.Icons.Warn, "确认要取消关注?");
        box.onOK(function myfunction()
        {
            var id = $(this).attr("data-id");
            $.post(host + "/ajax/unfollow-package", { package_id: id }, function (data)
            {
                if (data.code == 0)
                {
                    $(this).removeClass("unfollow");
                    $(this).addClass("follow");
                    $(this).text("关注");
                }
            }, "json");
        })

    }//取消关注
}