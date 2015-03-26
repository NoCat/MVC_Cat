<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/mp.Master" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="<%=ResolveUrl("~/js/image.js") %>"></script>
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="body" runat="server">
    <%
        if (ViewBag.PrevID != null)
        { 
    %>
    <a href="/image/<%=ViewBag.PrevID %>">上一张</a>
    <%
        }
        if (ViewBag.NextID != null)
        {
    %>
    <a href="/image/<%=ViewBag. NextID %>">下一张</a>
    <%
        }
    %>
</asp:Content>
