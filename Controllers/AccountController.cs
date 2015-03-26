using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC_Cat.Controllers
{
    public class AccountController : Controller
    {
        public ActionResult SignupEmail(string token)
        {
            string email = "";
            var res = DB.SExecuteScalar("select email from signup_email where token=? and expire>?", token, DateTime.Now);
            if (res != null)
            {
                email = (string)res;
            }
            else
            {
                return HttpNotFound();
            }

            if (Request.HttpMethod == "POST")
            {
                try
                {
                    string username = Tools.GetStringFromRequest(Request.Form["username"]);
                    string password = Tools.GetStringFromRequest(Request.Form["password"]);

                    int id = MPUser.Create(username, password, email);
                    Session["user"] = new MPUser(id);

                    DB.SExecuteNonQuery("delete from signup_email where token=?", token);

                    return Content(Tools.JSONStringify(new { code = 0, msg = "ok" }));
                }
                catch (MiaopassException exception)
                {
                    return Content(Tools.JSONStringify(new { code = exception.Code, msg = exception.Message }));
                }
            }
            else
            {
                ViewBag.Email = email;
                ViewBag.MPData = new { };
                return View();
            }
        }

        public ActionResult ResetPassword(string token)
        {
            var res = DB.SExecuteScalar("select email from reset_password where token=? and expire>?", token, DateTime.Now);

            if (res == null)
                return HttpNotFound();

            if (Request.HttpMethod == "POST")
            {
                try
                {
                    string email = (string)res;
                    var user = new MPUser(email);
                    string password = Tools.GetStringFromRequest(Request.Form["password"]);
                    user.Password = Tools.SHA256Hash(password);
                    return Content(Tools.JSONStringify(new { code = 0, msg = "ok" }));
                }
                catch (MiaopassException exception)
                {
                    return Content(Tools.JSONStringify(new { code = exception.Code, msg = exception.Message }));
                }
            }
            else
            {
                ViewBag.Token = token;
                return View();
            }
        }

    }
}
