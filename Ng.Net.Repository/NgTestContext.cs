using System;
using Microsoft.EntityFrameworkCore;
using Ng.Net.Repository.Domain;

namespace Ng.Net.Repository
{
    public class NgTestContext : DbContext
    {
        public NgTestContext(DbContextOptions<NgTestContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserInfo>(entity =>
            {
                entity.HasIndex(model => model.UserName).IsUnique();
                entity.HasIndex(model => model.UserAccount).IsUnique();
            });

        }

        public DbSet<UserInfo> UserInfos { get; set; }
    }
}