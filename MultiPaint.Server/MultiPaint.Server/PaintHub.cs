using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace MultiPaint.Server
{
    [HubName("paintHub")]
    public class PaintHub : Hub
    {
        public void DistributeCanvas(string dataUrl)
        {
            Clients.All.updateCanvas(dataUrl);
        }
    }
}