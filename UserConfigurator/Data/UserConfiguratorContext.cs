using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace UserConfigurator.Models
{
    public class UserConfiguratorContext : DbContext
    {
        public UserConfiguratorContext (DbContextOptions<UserConfiguratorContext> options)
            : base(options)
        {
        }

        public DbSet<UserConfigurator.Models.User> User { get; set; }
    }
}
