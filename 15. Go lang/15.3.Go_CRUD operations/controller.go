package main

import (
	"encoding/json"
	"fmt"
	"math/rand"
	"net/http"
	"strconv"
	"time"
	"github.com/gorilla/mux"
)

func serveHome(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("<h1> HII </h1>"))
}
func getAllCourses(w http.ResponseWriter, r *http.Request) {
	fmt.Println("All courses")
	w.Header().Set("Content-type", "application/json")
	json.NewEncoder(w).Encode(Courses)
}

func getOneCourse(w http.ResponseWriter, r *http.Request) {
	fmt.Println("One Course")
	w.Header().Set("Content-type", "application/json") // it tells browser that backend is sending json data
	params := mux.Vars(r)                              // similar to req.params.id
	for _, course := range Courses {
		if course.CourseId == params["id"] { //params["id"] bcoz it has key- value pairs so to get key's value we d enote like this
			json.NewEncoder(w).Encode(course)
			return
		}
	}
	json.NewEncoder(w).Encode("No Course found  with given id")
}

func addCourse(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Add course")
	w.Header().Set("Content-type", "application/json")

	if r.Body == nil {
		json.NewEncoder(w).Encode("Enter course details to add")
	}

	var addc Course
	json.NewDecoder(r.Body).Decode(&addc) // decoder : json->struct , Encoder: struct->json
	if addc.isempty() {
		json.NewEncoder(w).Encode("Course name n id are empty")
		return
	}
	rand.Seed(time.Now().UnixNano())
	addc.CourseId = strconv.Itoa(rand.Intn(100))
	Courses = append(Courses, addc)
	json.NewEncoder(w).Encode(addc)

}

func updateCourse(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Update Course")
	w.Header().Set("Content-type", "application/json")
	params := mux.Vars(r)

	for index, value := range Courses {
		if value.CourseId == params["id"] {
			Courses = append(Courses[:index], Courses[index+1:]...)
			var ucourse Course
			json.NewDecoder(r.Body).Decode(&ucourse)
			ucourse.CourseId = params["id"]
			Courses = append(Courses, ucourse)
			json.NewEncoder(w).Encode(ucourse)
			return
		}
	}
	json.NewEncoder(w).Encode("Id not found to upadate")
}

func deleteCourse(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Delete course")
	w.Header().Set("Content-type", "application/json")
	params := mux.Vars(r)
	for index, value := range Courses {
		if value.CourseId == params["id"] {
			Courses = append(Courses[:index], Courses[index+1:]...)
			json.NewEncoder(w).Encode("Deleted successfully")
			return
		}
	}
	json.NewEncoder(w).Encode("Id not found to delete")
}
