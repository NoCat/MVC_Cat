using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

public enum MPFollowingTypes : byte
{
    /// <summary>
    /// 用户
    /// </summary>
    User = 0,
    /// <summary>
    /// 图包
    /// </summary>
    Package = 1
}
public enum MPPraiseTypes : byte
{
    /// <summary>
    /// 图片
    /// </summary>
    Image = 0,
    /// <summary>
    /// 图包
    /// </summary>
    Package = 1
}
public enum MPImageFromTypes : byte
{
    /// <summary>
    /// 自己上传
    /// </summary>
    Upload = 0,
    /// <summary>
    /// 采集自其他网站
    /// </summary>
    Pick = 1,
    /// <summary>
    /// 转采
    /// </summary>
    Repin = 2
}