package main

import (
	"fmt"
	"log"
	"main/router"
	"net/http"
)

func main(){
	fmt.Println("Hi MongoDb with go")
	r :=router.Router()
	fmt.Println("Server started")
	log.Fatal(http.ListenAndServe(":4000",r))
	fmt.Println("Server listening on 4000")
}