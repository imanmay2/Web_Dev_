package main

import "fmt"
// import "GoLang/helper"

var n1 int=30;
var n2 int=20;
func greetUser(username string){
	fmt.Println("Welcome to Golang",username)
}

func printNum(num1 int,num2 int) (int,int) {
	return num1,num2
}

type europeDetails struct{
		countryName string
		place string
		username string
		num int
	}


func main(){
	// var username string
	
	// fmt.Scanln(&username)

	// fmt.Println("Welcome to GoLang ",username)

	//Array operations
	// var usernames=[6]string{}  //creating an empty array.
	// usernames[0]="imanmay2"
	// usernames[1]="ianwesha2"
	// usernames[2]="imanshree2"

	// for index,username:=range usernames{
	// 	fmt.Println(index+1," ",username)
	// }


	// //Slice Operations

	// fmt.Println("Slice Operations")
	// var names []string
	// names=append(names,"Manmay Chakaborty")
	// names=append(names,"Anwesha Chakraborty")
	

	// for i:=0;i<len(names);i++{
	// 	fmt.Println(i+1," ",names[i])
	// }

	// greetUser("imanmay2")
	// greetUser("ianwesha2")

	// num1,num2:=printNum(n1,n2)
	// //Switch Example
	// fmt.Println("The numbers are",num1,"and",num2)

	// isValid:=helper.ValidateEmail("imanmay2@gmail.com");

	// if isValid{
	// 	fmt.Println("User Email is a valid one");
	// } else{
	// 	fmt.Println("User Email is Invalid");
	// }

	// var userData=make(map[int]string)
	// userData[1]="Manmay"
	// userData[2]="Anwesha"
	// userData[3]="Puchi"

	// for key,value:=range userData{
	// 	fmt.Println(key,value)
	// }

	var places=make([]europeDetails,0)

	var countryName string
	var place string
	var username string
	var num int
	fmt.Scanln(&countryName)
	fmt.Scanln(&place)
	fmt.Scanln(&username)
	fmt.Scanln(&num)

	
}

