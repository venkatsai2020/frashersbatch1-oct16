package library;

import java.util.LinkedList;

public interface BookDAO
{
	void addBook(Book book);
	LinkedList<Book> searchBookByTitle(String bookTitle);
	LinkedList<Book> searchBookByAuthor(String bookAuthor);
	Book search(String bookTitle,String bookAuthor,int edition);
	boolean updateBook(Book book,String bookTitle,String bookAuthor,int edition);
	boolean removeBook(Book book);
	LinkedList<Book> getList();
	void setList(LinkedList<Book> list);
}
