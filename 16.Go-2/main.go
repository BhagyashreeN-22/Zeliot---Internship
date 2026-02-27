package main

import (
	"os"

	"github.com/gin-gonic/gin"
	"go-jwt/controller"
	"go-jwt/initializers"
)

func init() {
	initializers.ConnectDb()
	initializers.SyncDatabase()
}

func main() {

	r := gin.Default()

	r.POST("/users", controllers.CreateUser)
	r.GET("/users", controllers.GetUsers)
	r.GET("/users/:id", controllers.GetUser)
	r.PUT("/users/:id", controllers.UpdateUser)
	r.DELETE("/users/:id", controllers.DeleteUser)

	port := os.Getenv("PORT")
	r.Run(":" + port)
}