namespace WebAPI1.Models;

public class Book
{
    public int BookId { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public decimal Price { get; set; }
    public string Note { get; set; }
}