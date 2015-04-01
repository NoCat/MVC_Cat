using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC_Cat.Controllers
{
    public class SearchController : Controller
    {
        public ActionResult Index(string keyword)
        {
            DB.SExecuteReader("select image.id from image,package where image.packageid=package.id and (package.title like concat('%',?,'%') or image.description like concat('%',?,'%')", keyword);
            return View();
        }

    }
}
