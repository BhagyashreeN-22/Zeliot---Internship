package initializers

import (
	"log"
	"go-jwt/model"
)

func SyncDatabase() {

	if DB == nil {
		log.Fatal("Database not initialized")
	}

	err := DB.AutoMigrate(&model.User{})
	if err != nil {
		log.Fatal("Migration failed:", err)
	}

	log.Println("Database migrated successfully")
}