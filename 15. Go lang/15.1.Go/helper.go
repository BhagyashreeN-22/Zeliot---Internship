package main

import (
	//	"bufio"
	"fmt"
	"io"
	"io/ioutil"
	"os"
	// "time"
)

// in go ..we dnt import n export we just run files simulatanously as all files r in same- "package main" function ..
// so all fun inside folder runs together
//we can create package ofour own name .. but inorder to use it in other package then we shud import it like folder_name/package_name

 func helper_main(){
// var namestring string
// fmt.Scan(&namestring)   // scan cannot readspaces..so instead of that we use bufio.stdin
// fmt.Printf("name =%v\n",namestring)

// name :=bufio.NewReader(os.Stdin)  //this sllows u to  entire sentence with space
// fmt.Println("Enter your full name")
// text, _ := name.ReadString('\n')  //here text is like try n _ is like catch..there is no try,catch like thing in go..so we use 2 vaiables ..with comma
// fmt.Println("name:",text)

//  presentTime :=time.Now()
//  fmt.Println(presentTime.Format("01-02-2006 15:04:05 Monday"))  //01-month,02-date,2006-year..this is standard date formate to use  ...15:04:05 is fixed format to print time , n nomatter wt day is monday is default 

 mynum :=20
 var ptr = &mynum
 fmt.Println("value present in ptr: ",ptr)
 fmt.Println("value present in address of value of ptr: ",*ptr)

 var slice =[]string{"Apple","Banana","Mango"}
 fmt.Println(slice)
 slice = append(slice, "Tomato","Peach")
 fmt.Println(slice)
 //slice=append(slice[1:3]) //slicing technique..which gives values starting form index1 till index 2...index3 is not  included
 //fmt.Println(slice)
 var deleteIndex =2 // i want todelete 2nd indexed value which is mango
 slice=append(slice[:deleteIndex],slice[deleteIndex+1:]...) // this helps to delete value of particular index
 fmt.Println(slice)

 mapvar :=make(map[string]string)  // map ds..we shudgive wt type ofdata it is storing
 mapvar["js"]="JAvascript"
 mapvar["py"]="python"
 mapvar["rb"]="Ruby"
 fmt.Println(mapvar)

 delete(mapvar,"rb") //todelete value with key rb
 fmt.Println(mapvar)

 type User struct{
	Name   string
	age    int
	status bool
    gmail  string	
 }
 user1 := User{"Bhagya",20,true,"bhagya@gmail.com"}
 fmt.Println(user1)

 // "defer" is used to send the sen side of it to last line of the program eg
//  defer fmt.Println("World") // even though it is written 1st ..this will b appended at the last so output ll b hello world
//  defer fmt.Println("one") // so order of execution llb lifo in deffer ...so last in first out ..so output ll b hello one world
//  fmt.Println("hello")

 content := " so order of execution llb lifo in deffer ...so last in first out ..so output ll b hello one world"
 file,err := os.Create("index.txt")

 if err!=nil{
	panic(err)
}
 length ,err :=io.WriteString(file,content)
if err!=nil{
  panic(err)
}
fmt.Println(length)
defer file.Close()
readFile("./index.txt")
}
func readFile(filname string){
	databyte,err:= ioutil.ReadFile(filname)
	if err!= nil{
		panic(err)
	}
	fmt.Println(string(databyte))
}