package library;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.LinkedList;
import java.util.Scanner;

public class Librarian extends Thread
{
	private Scanner scan=new Scanner(System.in);
	public void access()
	{
		BookDTO bookDTO=new BookDTO();
		BookDAO bookAccessObject = bookDTO.bookDAO();
		System.out.println("press 1 to add a book ");
		System.out.println("press 2 to search a book ");
		System.out.println("press 3 to search book using author ");
		System.out.println("press 4 to search book using book name ");
		System.out.println("press 5 to update book ");
		System.out.println("press 6 to remove book ");
		System.out.println("enter the choice :");
		String choice1=scan.next();
		int choice;
		while(true)
		{
			try
			{
				choice=Integer.parseInt(choice1);
				break;
			}
			catch(NumberFormatException e)
			{
				System.out.println("Invalid Input");
				System.out.println("Re-Enter the choice :");
				choice1=scan.next();
			}
		}
		if(choice==1)
		{
			System.out.println("=====enter the book detiails=====");
			System.out.println("enter the book title :");
			scan.nextLine();
			String bookTitle=scan.nextLine();
			System.out.println("enter the author name :");
			String bookAuthor=scan.nextLine();
			System.out.println("enter genre :");
			String genre=scan.nextLine();
			System.out.println("enter the edition :");
			int edition;
			String edition1=scan.next();
			while(true)
			{
				try
				{
					edition=Integer.parseInt(edition1);
					break;
				}
				catch(NumberFormatException e)
				{
					System.out.println("Invalid Edition no");
					System.out.println("Re-Enter the Edition :");
					edition1=scan.next();
				}
			}
			System.out.println("enter the book price :");
			String price1=scan.next();
			int price;
			while(true)
			{
				try
				{
					price=Integer.parseInt(price1);
					break;
				}
				catch(NumberFormatException e)
				{
					System.out.println("Invalid Price");
					System.out.println("Re-Enter the Price:");
					price1=scan.next();
				}
			}
			bookAccessObject.addBook(new Book(bookTitle,bookAuthor,genre,edition,price));
		}
		else if(choice==2)
		{
			System.out.println("======search a book======");
			System.out.println("enter the book title to search :");
			scan.nextLine();
			String bookTitle=scan.nextLine();
			System.out.println("enter the author name to search :");
			String bookAuthor=scan.nextLine();
			System.out.println("enter the edition to search :");
			int edition;
			String edition1=scan.next();
			while(true)
			{
				try
				{
					edition=Integer.parseInt(edition1);
					break;
				}
				catch(NumberFormatException e)
				{
					System.out.println("Invalid Edition no");
					System.out.println("Re-Enter the Edition :");
					edition1=scan.next();
				}
			}
			System.out.println(bookAccessObject.search(bookTitle, bookAuthor, edition));
		}
		else if(choice==3)
		{
			System.out.println("======search a book by Author=======");
			System.out.println("enter the author name to search :");
			scan.nextLine();
			String bookAuthor=scan.nextLine();
			System.out.println(bookAccessObject.searchBookByAuthor(bookAuthor));
		}
		else if(choice==4)
		{
			System.out.println("======search a book by booktitle=====");
			System.out.println("enter the book title :");
			scan.nextLine();
			String bookTitle=scan.nextLine();
			System.out.println(bookAccessObject.searchBookByTitle(bookTitle));
		}
		else if(choice==5)
		{
			System.out.println("=====enter the old book details======");
			System.out.println("enter the book title  :");
			scan.nextLine();
			String bookTitle_o=scan.nextLine();
			System.out.println("enter the  author :");
			String bookAuthor_o=scan.nextLine();
			System.out.println("enter the edition  :");
			int edition1;
			String edition2=scan.next();
			while(true)
			{
				try
				{
					edition1=Integer.parseInt(edition2);
					break;
				}
				catch(NumberFormatException e)
				{
					System.out.println("Invalid Edition no");
					System.out.println("Re-Enter the Edition :");
					edition2=scan.next();
				}
			}
			System.out.println("=====enter update detiails ======");
			System.out.println("enter the book title  :");
			scan.nextLine();
			String bookTitle=scan.nextLine();
			System.out.println("enter the  author :");
			String bookAuthor=scan.nextLine();
			System.out.println("enter genre :");
			String gener=scan.nextLine();
			System.out.println("enter the edition  :");
			int edition;
			String edition3=scan.next();
			while(true)
			{
				try
				{
					edition=Integer.parseInt(edition3);
					break;
				}
				catch(NumberFormatException e)
				{
					System.out.println("Invalid Edition no");
					System.out.println("Re-Enter the Edition :");
					edition3=scan.next();
				}
			}
			System.out.println("enter the book price to update :");
			String price1=scan.next();
			int price;
			while(true)
			{
				try
				{
					price=Integer.parseInt(price1);
					break;
				}
				catch(NumberFormatException e)
				{
					System.out.println("Invalid Price");
					System.out.println("Re-Enter the Price:");
					price1=scan.next();
				}
			}
			boolean flag=bookAccessObject.updateBook(new Book(bookTitle,bookAuthor,gener,edition,price),bookTitle_o,bookAuthor_o,edition1);
			if(flag==true)
				System.out.println("book has been updated");
			else
				System.out.println("book dosen't exist");
		}
		else if(choice==6)
		{
			System.out.println("=====enter the book detiails to remove====");
			System.out.println("enter the book title :");
			scan.nextLine();
			String bookTitle=scan.nextLine();
			System.out.println("enter the author name :");
			String bookAuthor=scan.nextLine();
			System.out.println("enter genre :");
			String gener=scan.nextLine();
			System.out.println("enter the edition :");
			int edition;
			String edition1=scan.next();
			while(true)
			{
				try
				{
					edition=Integer.parseInt(edition1);
					break;
				}
				catch(NumberFormatException e)
				{
					System.out.println("Invalid Edition no");
					System.out.println("Re-Enter the Edition :");
					edition1=scan.next();
				}
			}
			System.out.println("enter the book price :");
			String price1=scan.next();
			int price;
			while(true)
			{
				try
				{
					price=Integer.parseInt(price1);
					break;
				}
				catch(NumberFormatException e)
				{
					System.out.println("Invalid Price");
					System.out.println("Re-Enter the Price:");
					price1=scan.next();
				}
			}
			boolean flag=bookAccessObject.removeBook(new Book(bookTitle,bookAuthor,gener,edition,price));
			if(flag==true)
				System.out.println("book has been removed");
			else
				System.out.println("book dosen't exits");
		}
		else 
		{
			System.out.println("Invalid Choice");
		}
	}
	@Override
	public void run()
	{
		char ch;
		System.out.println("Welcome to Library Management System");
		deserilization();
		do
		{
			access();
			System.out.println("press 'Y' to Continue");
			System.out.println("press 'N' to stop");
			ch=scan.next().charAt(0);
		}while(ch=='Y'||ch=='y');
		serilization();
		System.out.println("Thank you visit us again");
	}
	public void serilization()
	{
		File file=new File("E:/Library/Book.ser");
		BookDTO bookDTO=new BookDTO();
		BookDAO bookAccessObject = bookDTO.bookDAO();
		if(file.exists())
			file.delete();
		try
		{
			if(file.exists()==false)
				file.createNewFile();
			FileOutputStream f1=new FileOutputStream(file);
			ObjectOutputStream o1=new ObjectOutputStream(f1);
			LinkedList<Book> list=bookAccessObject.getList();
			o1.writeObject(list);
			o1.flush();
			o1.close();
			f1.close();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}
	public void deserilization()
	{
		File file=new File("E:/Library/Book.ser");
		if(file.exists()==false)
		{
			return;
		}
		System.out.println("Books in Library :");
		BookDTO bookDTO=new BookDTO();
		BookDAO bookAccessObject = bookDTO.bookDAO();
		try
		{
			FileInputStream f1=new FileInputStream(file);
			ObjectInputStream o1=new ObjectInputStream(f1);
			LinkedList<Book> list=(LinkedList<Book>)o1.readObject();
			for(Book book:list)
			{
				System.out.println(book);
			}
			bookAccessObject.setList(list);
			o1.close();
			f1.close();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}
}