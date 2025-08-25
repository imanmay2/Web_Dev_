package main
import "fmt"

func main(){
	
	var username string;
	var age int;
	fmt.Printf("Enter the username : ");
	fmt.Scan(&username);
	fmt.Printf("Enter the age : ");
	fmt.Scan(&age);

	fmt.Printf("Hello %v , Your age is %v",username,age);
}