package main

import "fmt"

func main(){
	// var username string
	
	// fmt.Scanln(&username)

	// fmt.Println("Welcome to GoLang ",username)

	//Array operations
	var usernames=[6]string{}  //creating an empty array.
	usernames[0]="imanmay2"
	usernames[1]="ianwesha2"
	usernames[2]="imanshree2"


	fmt.Println("Usernames are: ")
	fmt.Println(usernames[0])
	fmt.Println(usernames[1])
	fmt.Println(usernames[2])

	//Slice Operations

	fmt.Println("Slice Operations")
	var names []string
	names=append(names,"Manmay Chakaborty")
	names=append(names,"Anwesha Chakraborty")

	fmt.Println(names[0])
	fmt.Println(names[1])
	
}