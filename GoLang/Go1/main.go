package main

import (
	"fmt"
	"helper/helper"
)

func main(){
	fmt.Println("Welcome to Helper Package!!!!");
	helper.GreetUser();


	// MAP 
	students:=make(map[string]int);

	students["Manmay"]=90;
	students["Anwesha"]=80;
	students["Jagriti"]=70;

	fmt.Println("1st Loop : ");
	for key,val:=range students{
		fmt.Printf("Key : %v Value is : %v",key,val);
	}
	fmt.Println();
	students["Anwesha"]=91;
	fmt.Println("2nd Loop : ");
	for key,val:=range students{
		fmt.Printf("Key : %v Value is : %v",key,val);
		fmt.Println();
	}
	fmt.Println();

	delete(students,"Jagriti");

	fmt.Println("3rd Loop : ");
	for key,val:=range students{
		fmt.Printf("Key : %v Value is : %v",key,val);
		fmt.Println();
	}
	fmt.Println();
}
