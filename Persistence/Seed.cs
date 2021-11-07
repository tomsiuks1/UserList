using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public static class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Users.Any())
            {
                return;
            }
            
            var users = new List<User>
            {
                new User
                {
                    userId = 1,
                    title = "title1",
                    body = "body1"
                },
                new User
                {
                    userId = 1,
                    title = "title1",
                    body = "body1"
                },
                new User
                {
                    userId = 1,
                    title = "title1",
                    body = "body1"
                },
                new User
                {
                    userId = 2,
                    title = "title2",
                    body = "body2"
                },
                new User
                {
                    userId = 2,
                    title = "title2",
                    body = "body2"
                },
                new User
                {
                    userId = 2,
                    title = "title2",
                    body = "body2"
                },
                new User
                {
                    userId = 3,
                    title = "title3",
                    body = "body3"
                },
                new User
                {
                    userId = 3,
                    title = "title3",
                    body = "body3"
                },
                new User
                {
                    userId = 4,
                    title = "title4",
                    body = "body4"
                },
                new User
                {
                    userId = 4,
                    title = "title4",
                    body = "body4"
                },
                new User
                {
                    userId = 5,
                    title = "title5",
                    body = "body5"
                },
                new User
                {
                    userId = 5,
                    title = "title5",
                    body = "body5"
                },
                new User
                {
                    userId = 6,
                    title = "title6",
                    body = "body6"
                },
            };

            await context.Users.AddRangeAsync(users);
            await context.SaveChangesAsync();
        }
    }
}