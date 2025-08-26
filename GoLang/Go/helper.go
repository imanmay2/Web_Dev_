package main
import(
	"fmt"
)
func greet(username string,age uint){
	fmt.Printf("Hello Prime %v your age is %v",username,age);
}

func checkPrime(num int) string {
	fmt.Println("Number you entered is : ",num);
	ct:=0;
	for i:=1;i<=num;i++{
		if(num%i==0){
			ct++;
		}
	}
	if ct==2{
		return "Prime";
	}
	return "Composite";
}