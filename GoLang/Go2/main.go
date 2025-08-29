package main

import (
	"fmt"
)

func checkPrime(n int) bool{
	ct:=0;
	for i:=1;i<=n;i++{
		if(n%i==0){
			ct++;
		}
	}
	return ct==2;
}

func main(){
	var n int;
	fmt.Println("Enter the number : ");
	fmt.Scanln(&n);

	fmt.Println("The Prime numbers are : ");
	
	for i:=2;i<=n;i++{
		if(checkPrime(i)){
			fmt.Printf("%v ",i);
		}
	}
}