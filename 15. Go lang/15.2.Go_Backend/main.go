package main

import (
	"fmt"
	"io"
	"net/http"
	"strings"
	"net/url"
)

// import (
// 	"fmt"
// 	"io"
// 	"net/http"
// )
// var url = "https://www.google.com/"

// func main(){
// 	// fmt.Println("get req")
// 	// response,err:= http.Get(url)
// 	// errfun(err)
// 	// data, err :=io.ReadAll(response.Body)
// 	// errfun(err)
// 	// content := string(data)
// 	// fmt.Println(content)
// 	// defer response.Body.Close()

// }

// func errfun(err error){
// 	if err!= nil{
// 		panic(err)
// 	}
// }

func main()  {
	fmt.Println("Welocme to go server")
	getreq()
	postreq()
	postFormReq()
}

func getreq(){
	const url ="http://localhost:3000/get"
	response ,err :=http.Get(url)
	errFun(err)
	fmt.Println("Response status : ",response.Status)
    fmt.Println("Response message:",response.ContentLength)
	context,_ :=io.ReadAll(response.Body)
	defer response.Body.Close()
	fmt.Println(string(context))
}

func postreq(){
	const url="http://localhost:3000/post"
	data:=strings.NewReader(`
	{
	  "courseName":"Go",
	  "price" : "0"
	}
	`)
	response ,err :=http.Post(url,"application/json",data)
	errFun(err)
	defer response.Body.Close()
	context,_:= io.ReadAll(response.Body)
	fmt.Println(string(context))

}

func postFormReq(){
	const myUrl="http://localhost:3000/postform"
	data :=url.Values{}
	data.Add("name","Bhagya")
	data.Add("email","bhagya@gmail.com")
	response,err :=http.PostForm(myUrl,data)
	errFun(err)
	defer response.Body.Close()
	context,_ := io.ReadAll(response.Body)
	fmt.Println(string(context))
}
func errFun(err error){
	if err!=nil{
		panic(err)
	}
}