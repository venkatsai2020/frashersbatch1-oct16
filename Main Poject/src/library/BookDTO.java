package library;

import java.util.LinkedList;

public class BookDTO 
{
	private static LinkedList<Book> b1=new LinkedList<Book>();
	public BookDAO bookDAO()
	{
		return new BookDAOImp();
	}
	private class BookDAOImp implements BookDAO
	{
		private LinkedList<Book> b2=new LinkedList<Book>();
		private LinkedList<Book> b3=new LinkedList<Book>();
		@Override
		public void addBook(Book book)
		{
			b2.clear();
			if(b1.isEmpty())
			{
				b1.add(book);
			}
			else
			{
				b2.add(search(book.getBookTitle(),book.getBookAuthor(),book.getBookEdition()));
				if(b2.get(0)==null)
				{
					b1.add(book);
				}
				else
				{
					System.out.println("Book already exists");
				}
			}
		}
		@Override
		public LinkedList<Book> searchBookByTitle(String bookTitle)
		{
			b2.clear();
			for(int i=0;i<b1.size();i++)
			{
				if((b1.get(i).getBookTitle()).equals(bookTitle))
				{
					b2.add(b1.get(i));
				}
			}
			return b2;
		}

		@Override
		public LinkedList<Book> searchBookByAuthor(String bookAuthor)
		{
			b2.clear();
			for(int i=0;i<b1.size();i++)
			{
				if((b1.get(i).getBookAuthor()).equals(bookAuthor))
				{
					b2.add(b1.get(i));
				}
			}
			return b2;
		}

		@Override
		public Book search(String bookTitle, String bookAuthor, int edition) 
		{
			b2.clear();
			int index=getIndex(bookTitle,bookAuthor,edition);
			if(index!=-1)
			{
				return b3.get(0);
			}
			else
			{
				return null;
			}
		}

		@Override            
		public boolean updateBook(Book book,String BookTitle,String BookAuthor,int edition) 
		{
			b2.clear();
			int index=getIndex(BookTitle,BookAuthor,edition);
			if(index==-1)
				return false;
			else
			{
				Book bb=b1.get(index);
				bb.setBookAuthor(book.getBookAuthor());
				bb.setBookEdition(book.getBookEdition());
				bb.setBookgenre(book.getBookgenre());
				bb.setBookPrice(book.getBookPrice());
				bb.setBookTitle(book.getBookTitle());
				return true;
			}
		}

		@Override
		public boolean removeBook(Book book)
		{
			b2.clear();
			int index=getIndex(book.getBookTitle(),book.getBookAuthor(),book.getBookEdition());
			if(index==-1)
				return false;
			else
			{
				b1.remove(index);
				return true;
			}
		}
		public int getIndex(String bookTitle, String bookAuthor, int edition)
		{
			int j=-1;
			b3.clear();
			for(int i=0;i<b1.size();i++)
			{
				Book bb=b1.get(i);
				if(((bb.getBookAuthor()).equals(bookAuthor))&&((bb.getBookTitle()).equals(bookTitle))&&((bb.getBookEdition())==edition))
				{
					b3.add(b1.get(i));
					j=i;
				}
			}
			return j;
		}	
		public LinkedList<Book> getList()
		{
			b2.clear();
			for(int i=0;i<b1.size();i++)
			{
				b2.add(b1.get(i));
			}
			return b2;
		}
		public void setList(LinkedList<Book> list)
		{
			b1=list;
		}
	}
}