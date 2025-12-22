package main

import "fmt"

func main(){

	var username string;
	var age int;

	username="imanmay2";
	age=21;
	fmt.Println("Welcome to Go.");
	fmt.Println("Let's dive into GoLang.");
	fmt.Println("%v age is %v",username,age);
	fmt.Println("Type of the variables used are : %t %t",username,age);
}