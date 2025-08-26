package main
import (
	"fmt"
	"strings"
)

func greetUsers(username string,age uint){
	fmt.Printf("Welcome to GoLang %v , your age is calculated as : %v",username,age);
}
func main(){
	
	var username string;
	var age uint;
	fmt.Printf("Enter the username : ");
	fmt.Scan(&username);
	fmt.Printf("Enter the age : ");
	fmt.Scan(&age);
	greetUsers(username,age);

	//Arrays
	fmt.Println("Welcome to GoLang.");
	var arr [5]int;
	arr[0]=1;
	fmt.Println(arr);
	arr[1]=2;
	fmt.Println(arr);
	arr[2]=3;
	fmt.Println(arr);

	fmt.Println("Length of the array : ",len(arr));
	fmt.Println("Capacity of the array : ",cap(arr));


	//Slices
	fmt.Println("-----Slices ----- ");
	var bookings []string;
	bookings=append(bookings,"Manmay","Loves","Anwesha");

	fmt.Println(bookings[1]);
	fmt.Println(bookings);


	//Q1. to store natural numbers in the array.
	arr1:=[10]int{};
	for i:=0;i<len(arr1);i++ {
		arr1[i]=i+1;
	}
	fmt.Println(arr1);


	//Q2. Creates the slice from the array , that contains only even numbers.
	
	slice:=[]int{};

	for _,val:=range arr1{
		if(val%2==0){
			slice=append(slice,val);
		}
	}
	fmt.Println("Slice Operation : ");
	fmt.Println(slice);


	//Q3. use for loop to print both the array as well as slice.
	fmt.Println("Array Elements : - >");
	for i:=0;i<len(arr1);i++{
		fmt.Printf("%v ",arr1[i]);
	} 
	fmt.Println();

	fmt.Println("Slice Elements : - >");

	for i:=0;i<len(slice);i++{
		fmt.Printf("%v ",slice[i]);
	}
	fmt.Println();


	//Sum of the elements in the slice.
	sum:=0;
	for i:=0;i<len(slice);i++{
		sum=sum+slice[i];
	}

	fmt.Println("Sum of the Slice Elements is: ",sum);

	//String validation.
	email:="imanmay2gmail.com";
	validateEmail:=strings.Contains(email,"@");
	fmt.Println(validateEmail);

	//helper package.

	greet("Anwesha",21);
	fmt.Println();
	fmt.Println(checkPrime(6));
}