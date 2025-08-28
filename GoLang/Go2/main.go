package main
import (
	"fmt"
	"helper/helper"
)

func GreetMain(){
	fmt.Println("Hello from D2");
}

func main(){
	helper.GreetGoLang();
	GreetMain();
}