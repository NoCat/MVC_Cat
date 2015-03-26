using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC_Cat.Controllers
{
    public class PickController : Controller
    {

        public ActionResult Index()
        {
            try
            {
                string from = Tools.GetStringFromRequest(Request.QueryString["from"]);
                string source = Tools.GetStringFromRequest(Request.QueryString["source"]);
                string description = Tools.GetStringFromRequest(Request.QueryString["description"]);

                ViewBag.MPData = new
                {
                    user=new JSON.User(Session["user"] as MPUser),
                    from=from,
                    source=source,
                    description=description
                };

                return View();
            }
            catch (MiaopassException)
            {
                return HttpNotFound();
            }
        }

    }
}
