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

            //seed
            modelBuilder.Entity<UserInfo>().HasData(new UserInfo { Id = Guid.NewGuid().ToString(), UserAccount = "123456@123", PassWord = "123456", CreateDate = DateTime.Now });
        }

        public DbSet<UserInfo> UserInfos { get; set; }
    }
}
