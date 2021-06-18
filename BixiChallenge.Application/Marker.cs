using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BixiChallenge.Application
{
    public class Marker
    {
        public double lat { get; set; }
        public double lng { get; set; }
        public string label { get; set; }
        public bool draggable { get; set; }
    }
}
