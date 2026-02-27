package router

import (
	"main/controller"
	"github.com/gorilla/mux"
)

func Router() *mux.Router{
	router :=mux.NewRouter()
	router.HandleFunc("/movies",controller.GetAllMovies).Methods("GET")
	router.HandleFunc("/movies/create",controller.CreateMovie).Methods("POST")
	router.HandleFunc("/movies/update/{id}",controller.UpdateMovie).Methods("PUT")
	router.HandleFunc("/movies/delete/{id}",controller.DeleteOneMovie).Methods("DELETE")
	router.HandleFunc("/movies/delete",controller.DeleteAll).Methods("DELETE")
	return router
}

//gin-code

// package main

// import (
// 	"main/controller"

// 	"github.com/gin-gonic/gin"
// )

// func main() {

// 	r := gin.Default()

// 	r.GET("/movies", controller.GetAllMovies)
// 	r.POST("/movie", controller.CreateMovie)
// 	r.PUT("/movie/:id", controller.UpdateMovie)
// 	r.DELETE("/movie/:id", controller.DeleteOneMovie)
// 	r.DELETE("/movies", controller.DeleteAll)

// 	r.Run(":8080")
// }