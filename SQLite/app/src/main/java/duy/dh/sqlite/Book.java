package duy.dh.sqlite;

public class Book {
    private int bookID;
    private String bookName;
    private int page;
    private float price;
    private String description;

    public Book(int bookID, String bookName, int page, float price, String description) {
        this.bookID = bookID;
        this.bookName = bookName;
        this.page = page;
        this.price = price;
        this.description = description;
    }

    public int getBookID() {
        return bookID;
    }

    public String getBookName() {
        return bookName;
    }

    public int getPage() {
        return page;
    }

    public float getPrice() {
        return price;
    }

    public String getDescription() {
        return description;
    }
}
