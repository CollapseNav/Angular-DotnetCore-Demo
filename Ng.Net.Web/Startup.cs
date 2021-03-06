/*
 * @Author: CollapseNav
 * @Date: 2019-12-27 18:31:28
 * @LastEditors: CollapseNav
 * @LastEditTime: 2020-03-03 18:25:38
 * @Description: 
 */
using System;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Ng.Net.Application;
using Ng.Net.Application.Interface;
using Ng.Net.Repository;
using Ng.Net.Repository.Interface;

namespace Ng.Net.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(options =>
            {
                options.SaveToken = true;
                options.RequireHttpsMetadata = false;

                options.TokenValidationParameters = new TokenValidationParameters()
                {
                    ValidateIssuer = true,
                    ValidIssuer = "DotnetTest",
                    ValidateAudience = true,
                    ValidAudience = "AngualrApp",
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("It's a .net core spa test."))
                };
            });

            services.AddCors(options =>
            {
                options.AddPolicy("angular",
                builder => builder.WithOrigins("http://localhost:4200")
                .AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod().WithExposedHeaders());
            });

            services.AddControllersWithViews();

            services.AddDbContext<NgTestContext>(options =>
            {
                options.UseSqlite(Configuration.GetConnectionString("TestSqlite"), m => m.MigrationsAssembly("Ng.Net.Web"));
            });

            services.AddScoped(typeof(IRepository<>), typeof(BaseRepository<>));
            services.AddScoped<IUserApplication, UserApplication>();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseAuthentication();

            app.UseStaticFiles();

            app.UseRouting();

            app.Use((request, next) =>
            {
                Console.WriteLine(request.Request.Headers["Origin"]);
                // foreach (var item in request.Request.Headers.Keys)
                //     Console.WriteLine(item + "    " + request.Request.Headers["Origin"]);
                return next();
            });


            app.UseCors("angular");

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
                endpoints.MapControllers().RequireCors("angular");
            });
        }
    }
}
