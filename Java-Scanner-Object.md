<h1>Java Scanner Object</h1>

<p> The Scanner Class comes from the java.util package or library (java.util.Scanner). 
It has many uses. It can be used to obtain input from the user via the console, 
and it can also be used to iterate through Strings, analyzing the individual words.</p>

<p>You create an instance of the Scanner class as so:</p>

<p>	Scanner sObj = new Scanner(System.in);</p>

<p>An instance method that can be used is nextInt(). This will allow the user to enter a number through the console. It is accessed through the Scanner Object</p>

<p>A simple example which lets the user type a number and upon hitting return the number is printed on a new line.</p>


	public static void main(String args[]){
		
		Scanner s = new Scanner(System.in);
		
		int i = s.nextInt();
		
		System.out.println(i + "");
	}
