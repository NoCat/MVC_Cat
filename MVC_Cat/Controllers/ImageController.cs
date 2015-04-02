using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC_Cat.Controllers
{
    public class ImageController : Controller
    {
        bool IsSpider()
        {
            var agent = Request.UserAgent.ToLower();
            if (agent.Contains("baiduspider") || agent.Contains("googlebot") || agent.Contains("360spider"))
                return true;
            return false;
        }

        public ActionResult Index(int id)
        {
            MPImage image = null;
            try
            {
                image = new MPImage(id);
            }
            catch
            {
                return HttpNotFound();
            }

            var imageDetail = new JSON.ImageDetail(image, Session["user"] as MPUser);

            if (Request.QueryString["ajax"] != null)
            {
                return Content(Tools.JSONStringify(imageDetail), "application/json");
            }

            string keywords = image.Description.Length > 20 ? image.Description.Substring(0, 20) + "..." : image.Description;
            ViewBag.Title = keywords + "@" + imageDetail.user.name + "收集到" + imageDetail.package.title + "_喵帕斯";
            ViewBag.Keywords = keywords;
            ViewBag.Description = image.Description;

            if (IsSpider())
            {
                ViewBag. PrevID = Convert.ToInt32(DB.SExecuteScalar("select id from image where id<? limit 1", image.ID));
                ViewBag. NextID = Convert.ToInt32(DB.SExecuteScalar("select id from image where id>? limit 1", image.ID));
            }

            ViewBag.MPData = new
            {
                user=new JSON.User(Session["user"] as MPUser),
                image=imageDetail
            };

            return View();
        }

    }
}
