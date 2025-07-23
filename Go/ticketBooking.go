package main
import "fmt"

func main(){
	var totalTicket uint=50;
	var userTicket uint;
	var userName string;

	fmt.Println("Enter the no. of Tickets you want to book:");
	fmt.Scan(&userTicket);
	fmt.Println("Enter the username: ");
	fmt.Scan(&userName);

	var remainingTicket uint=totalTicket-userTicket;

	fmt.Printf("Your username is %v and you have booked %v Tickets and remaining tickets are %v\n",userName,userTicket,remainingTicket);
}