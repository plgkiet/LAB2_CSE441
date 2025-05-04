namespace WebAPI1.Data;
using Microsoft.EntityFrameworkCore;
using WebAPI1.Models;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    { }

    public DbSet<Book> Books { get; set; }
}