package library;
import java.util.Scanner;
public class MatrixMultiolication {

	public static void main(String[] args) 
	{
		Scanner aa=new Scanner(System.in);
		System.out.println("enter the no.of rows of first matrix:");
		int row1=aa.nextInt();
		System.out.println("enter the no.of coloums of first matrix:");
		int coloum1=aa.nextInt();
		int[][] matrix1=new int[row1][coloum1];
		System.out.println("enter the matrix elements");
		for(int i=0;i<row1;i++)
		{
			for(int j=0;j<coloum1;j++)
			{
				matrix1[i][j]=aa.nextInt();
			}
		}
		System.out.println("enter the no.of rows of second matrix:");
		int row2=aa.nextInt();
		System.out.println("enter the no.of coloums of second matrix:");
		int coloum2=aa.nextInt();
		int[][] matrix2=new int[row2][coloum2];
		System.out.println("enter the matrix elements");
		for(int i=0;i<row2;i++)
		{
			for(int j=0;j<coloum2;j++)
			{
				matrix2[i][j]=aa.nextInt();
			}
		}
		if(row1==coloum2)
		{
			int[][] matrix3=new int[row1][coloum2];
			for(int m=0;m<row1;m++)
			{
				for(int i=0;i<row1;i++)
				{
					int sum=0;
					for(int j=0;j<coloum2;j++)
					{
						sum=sum+matrix1[m][j]*matrix2[j][i];
					}
					matrix3[m][i]=sum;
				}
			}
			System.out.println("=======multiplication of two matrix is=======");
			for(int i=0;i<row1;i++)
			{
				for(int j=0;j<coloum2;j++)
				{
					System.out.print(matrix3[i][j]+" ");
				}
				System.out.println();
			}
		}
		else
		{
			System.out.println("matrix multiplication is not possible");
		}
		aa.close();
	}
}
