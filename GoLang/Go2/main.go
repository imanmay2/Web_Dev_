package main

import (
	"fmt"
	"Go2/helper"
)


func GreetMain(){
	fmt.Println("Welcome to GoLang from main.");
}

func main(){
	GreetMain();
	helper.GreetUser();
}