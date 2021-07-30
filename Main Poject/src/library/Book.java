package library;

import java.io.Serializable;

public class Book implements Serializable
{
	private String bookTitle;
	private String bookAuthor;
	private String bookgenre;
	private int bookEdition;
	private int bookPrice;
	public Book(String bookTitle, String bookAuthor, String bookgenre, int bookEdition, int bookPrice) {
		super();
		this.bookTitle = bookTitle;
		this.bookAuthor = bookAuthor;
		this.bookgenre = bookgenre;
		this.bookEdition = bookEdition;
		this.bookPrice = bookPrice;
	}
	public String getBookTitle() {
		return bookTitle;
	}
	public void setBookTitle(String bookTitle) {
		this.bookTitle = bookTitle;
	}
	public String getBookAuthor() {
		return bookAuthor;
	}
	public void setBookAuthor(String bookAuthor) {
		this.bookAuthor = bookAuthor;
	}
	public String getBookgenre() {
		return bookgenre;
	}
	public void setBookgenre(String bookgenre) {
		this.bookgenre = bookgenre;
	}
	public int getBookEdition() {
		return bookEdition;
	}
	public void setBookEdition(int bookEdition) {
		this.bookEdition = bookEdition;
	}
	public int getBookPrice() {
		return bookPrice;
	}
	public void setBookPrice(int bookPrice) {
		this.bookPrice = bookPrice;
	}
	@Override
	public boolean equals(Object o) {
		Book b=(Book)o;
		return this.bookPrice==b.bookPrice;
	}
	@Override
	public String toString() {
		return "Book [bookTitle="+bookTitle +", bookAuthor="+bookAuthor +", bookGenre="+ bookgenre+", bookEdition=" +bookEdition +", bookprice="+bookPrice+"]";
	}	
}
