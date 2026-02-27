package model

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Netflix struct{
	ID      primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	Name    string             `bson:"movie_name" json:"movie_name,omitempty"`
	Watched bool               `bson:"watched" json:"watched,omitempty"`
}