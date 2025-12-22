package main
import ("fmt"
		"strings"
)

import h "Go_Practise/helper";

func main(){
	// var username string;
	// var age int;

	// username="imanmay2";
	// // age=21;
	// fmt.Printf("Enter the username : ");
	// fmt.Scan(&username);

	// fmt.Printf("Enter the age of the user : ");
	// fmt.Scan(&age);
	// fmt.Printf("Username is : %v\n",username);
	// fmt.Printf("Age of the user is : %v\n",age);

	// fmt.Printf("Type of the username is : %T\n",username);
	// fmt.Printf("Type of the age is : %T\n",age);

	//arrays in GO

	var bookings [5]string;
	bookings[0]="imanmay2";
	fmt.Printf("1st index is : %v\n",bookings[0]);

	var book=[]string{};
	book=append(book,"ianwesha");

	fmt.Println("1st index of the book array is : "+book[0]);

	arr:=[]int {};
	for i:=1;i<=8;i++ {
		arr=append(arr,i);
	}

	fmt.Println("Elements in the array stored are : ");
	for _,v:=range arr{
		fmt.Printf("%v ",v);
	}

	fmt.Println();

	email:="imanmay2@gmail.com";
	isValidEmail:=strings.Contains(email,"@");
	fmt.Println(isValidEmail);


	fmt.Println("Result of the Addition is : ",h.Add(3,3));
}