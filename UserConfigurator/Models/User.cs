using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserConfigurator.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Surname { get; set; }
        public bool IsAlive { get; set; }
        public DateTime BirthDate { get; set; }
    }
}
