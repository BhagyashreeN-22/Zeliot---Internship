package main

// import (
// 	"fmt" // fmt is package simialr to library stdio.in of c which allows to take input n print it out
// 	"strings"
// )

// func main(){
// 	var conferenceName= "Go conference"  //for varibales whose values are gng to change use "var" else if varibales value dosent chnage tn use "const"
// 	const ticketNo =50 
// 	var remainingTickets int = 50
//     helper_main()
// 	//fmt.Println("Welcome to ",conferenceName,"ticket booking app") //Print for jsut printing , Println to print n move tonxt line
// 	//instead of dng println where variablesr included we can use printf
//     fmt.Printf("Welcome to %v ticket booking app\n",conferenceName) //use this to print variables,constants %v is default ..%T is used to print datatype of variable along with its value
// 	fmt.Println("We have total of",ticketNo,"and remaining with",remainingTickets)
// 	fmt.Println("Book now!")

// 	var userName string   // so if we are declaring a variable whose value isnot known ..then we shud manually mention its datatype 
// 	userName="John"
// 	fmt.Println(userName)

// 	var firstName string
// 	var lastName string
// 	var gmail string
// 	var userTickets int
// 	var temp string 
//   //var bookings [50]string //array declaration
//   for remainingTickets>0 {
// 	if temp == "no" {
//     break
//     }
// 	fmt.Println("Enter first Name")
// 	fmt.Scan(&firstName)
// 	fmt.Println("Enter last Name")
// 	fmt.Scan(&lastName)
// 	fmt.Println("Enter gmail")
// 	fmt.Scan(&gmail)
// 	fmt.Println("Enter user Tickets")
// 	fmt.Scan(&userTickets)

// 	isValidName:= len(firstName) >=2 && len(lastName) >=2
// 	isValidgmail :=strings.Contains(gmail, "@")
// 	isValidTickets := userTickets>ticketNo && remainingTickets>0

// 	if(!isValidName || !isValidTickets || !isValidgmail){
//       fmt.Println("enter valid name,tickets,gmail")
// 	  continue
// 	}
// 	greetUser(firstName,lastName)

// 	fmt.Printf("Hii , Welcome %v %v \n",firstName,lastName);
// 	remainingTickets = remainingTickets-userTickets;
// 	fmt.Printf("Remaining tickets:%v\n",remainingTickets);
// 	//	bookings[0]=firstName + " " + lastName
// 	//	bookings[1]=firstName + " " + lastName
// 	//	fmt.Printf("array: %v\n",bookings[0])
// 	//	fmt.Printf("Array length: %v\n",len(bookings))

// 	//slice -list in c
// 	var bookings =[]string{}
// 	bookings=append(bookings, firstName+" "+lastName);
// 	firstNames := []string{}
// 	for _,value:= range bookings{   //_is used when u dnt use that variable..but req to mentioned 
// 		var names = strings.Fields(value)  //strigns_Fields is used to split string based on space 
// 		var firstn =names[0]
// 		firstNames=append(firstNames,firstn)
// 	}
// 	fmt.Printf("Slice:%v\n",firstNames)
// 	if remainingTickets <= 0{
// 		break
// 	}
// 	fmt.Println("Want to continue enter 'yes' or to exit enter 'no'")
// 	fmt.Scan(&temp)
//     }
// 	fmt.Println("Thank you!")
// }

// func greetUser(firstName string,lastName string) (string,string){  //to return multiple values ...we need to put brackets()
// 	fmt.Printf("Hello welcome %v %v\n",firstName,lastName)
// 	return firstName,lastName
// }

func main(){
	helper_main()
}

