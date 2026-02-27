package controllers

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"go-jwt/initializers"
	"go-jwt/model"
)

func CreateUser(c *gin.Context) {

	var user model.User

	if err := c.BindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
		return
	}

	initializers.DB.Create(&user)

	c.JSON(http.StatusOK, gin.H{
		"message": "User created",
		"user":    user,
	})
}
func GetUsers(c *gin.Context) {

	var users []model.User

	initializers.DB.Find(&users)

	c.JSON(http.StatusOK, users)
}

func GetUser(c *gin.Context) {

	id := c.Param("id")

	var user model.User
	initializers.DB.First(&user, id)

	c.JSON(http.StatusOK, user)
}

func UpdateUser(c *gin.Context) {

	id := c.Param("id")

	var user model.User
	initializers.DB.First(&user, id)

	var input model.User
	c.BindJSON(&input)

	initializers.DB.Model(&user).Updates(input)

	c.JSON(http.StatusOK, user)
}

func DeleteUser(c *gin.Context) {

	id := c.Param("id")

	initializers.DB.Delete(&model.User{}, id)

	c.JSON(http.StatusOK, gin.H{
		"message": "User deleted",
	})
}