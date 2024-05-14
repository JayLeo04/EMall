package sjtu.edu.cn.ebook;

public class Book {
    private int id;
    private String title;
    private int price;
    private String cover;
    private String author;
    private int sales;
    private int stock;
    private String description;

    // Constructor
    public Book(int id, String title, int price, String cover, String author, int sales, int stock, String description) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.cover = cover;
        this.author = author;
        this.sales = sales;
        this.stock = stock;
        this.description = description;
    }

    // Getters
    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public int getPrice() {
        return price;
    }

    public String getCover() {
        return cover;
    }

    public String getAuthor() {
        return author;
    }

    public int getSales() {
        return sales;
    }

    public int getStock() {
        return stock;
    }

    public String getDescription() {
        return description;
    }

    // Setters
    public void setId(int id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public void setCover(String cover) {
        this.cover = cover;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public void setSales(int sales) {
        this.sales = sales;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}