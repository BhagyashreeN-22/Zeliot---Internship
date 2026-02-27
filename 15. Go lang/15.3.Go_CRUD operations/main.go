// package main

// import (
// 	"encoding/json"
// 	"fmt"
// )

// type Course struct{
// 	Name string `json:"CourseName"` //alias toname ..soinstead of name it prints CourseName
// 	Price float32
// 	Platfrom string
// 	Password string `json:"-"` //this "-" makes this field invisible to anyapi req..which is safe
// 	Tags []string `json:"Tags,omitempty"` // if value oftags is nil or null this feild dnt appear
// }

// func main(){
//  EncodeJson()

// }

// func EncodeJson(){
// 	lcoCourses :=  []Course{
// 		{"React",299,"udemy","abc123",[]string{"web","ai"}},
// 		{"mern",199,"code","abc",[]string{"cloud","dev"}},
// 		{"angular",599,"udemy","abc123",nil},
// 	}
// 	content,_ :=json.MarshalIndent(lcoCourses,"","\t")   //marshal to convert struct into json ,unmarshal for converting back
// 	fmt.Println(string(content))
// 	DecodeJson(content)
// }

// func DecodeJson(data []byte){
// 	var courses []Course
//     _:err := json.Unmarshal(data,&courses)
// 	errFun(err)
// 	fmt.Printf("%+v\n",courses)
// }

// func errFun(err error){
// 	if err!=nil{
// 		panic(err)
// 	}
// }

// -----------------------------------------------------------------------
// package main

// import (
// 	"fmt"
// 	"log"
// 	"net/http"
// 	"github.com/gorilla/mux"
// )

// func main(){
// 	fmt.Println("Local req")
//     r:=mux.NewRouter()
// 	r.HandleFunc("/",serveHome).Methods("GET")
//     log.Fatal(http.ListenAndServe(":4000",r))
// }

// func serveHome(w http.ResponseWriter, r *http.Request){   //http.ResponseWriter isused to sendresponseback to browser  , *http.Request conatinsalluser request data like url,headersmethods
//  w.Write([]byte("<h1>Welcome to golang on localhost</h1>"))  // *http.Req bcoz we r passing pointer , browser understands bytes..so we convert <h1> stringinto byte
// }

//--------------------------------------------------

package main

import (
	"fmt"
	"log"
	"net/http"
	"github.com/gorilla/mux"
)

type Course struct {
	CourseId   string
	CourseName string
	price      int
	Author     *Author
}

type Author struct {
	Name    string
	Website string
}

var Courses []Course

func (c *Course) isempty() bool {
	return c.CourseName == ""
}

func main() {
	fmt.Println("Welcome To course dashboard")
	r := mux.NewRouter()
	Courses = append(Courses, Course{CourseId: "1", CourseName: "React", price: 299,
		Author: &Author{Name: "BHagya", Website: "www.React.com"}})
	Courses = append(Courses, Course{CourseId: "2", CourseName: "Mern", price: 199,
		Author: &Author{Name: "Shri", Website: "www.Mern.com"}})
	r.HandleFunc("/", serveHome).Methods("Get")
	r.HandleFunc("/courses", getAllCourses).Methods("Get")
	r.HandleFunc("/courses/{id}", getOneCourse).Methods("Get")
	r.HandleFunc("/addCourse", addCourse).Methods("Post")
	r.HandleFunc("/courses/{id}", updateCourse).Methods("Put")
	r.HandleFunc("/courses/{id}", deleteCourse).Methods("Delete")
	log.Fatal(http.ListenAndServe(":4000", r))
}

