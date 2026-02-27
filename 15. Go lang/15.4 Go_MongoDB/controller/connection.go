package controller

import (
	"context"
	"encoding/json"
	"fmt"
	"main/model"
	"net/http"

	"github.com/gorilla/mux"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

const connectionString ="mongodb+srv://dbUser:123@cluster0.wsqanks.mongodb.net/?appName=Cluster0"
const dbName ="Netflix"
const collectionName ="WatchList"

var collection *mongo.Collection  //pointer to mongodb

func errFun(err error){
	  if err!=nil{
	  panic(err)
    }
}
func init(){  //init is built in golang function which runs only one time when appli starts 
  clientOption :=options.Client().ApplyURI(connectionString)
  client,err:=mongo.Connect(context.TODO(),clientOption)
  errFun(err)
  fmt.Println("Connected to MongoDb")

  collection = client.Database(dbName).Collection(collectionName)
  fmt.Println("Connection instance ready")
}
 // ------------------------------------HELPER FUNCTIONS-----------------------------------------------------------
 // these are just db helper functions... req,res are handled separately after reciving req, db helper func is called
func insetOneMovie(movie model.Netflix){  
	inserted,err := collection.InsertOne(context.Background(),movie)
    errFun(err)
	fmt.Println("Inserted one movie with id:",inserted.InsertedID)
}

func updateMovie(movieId string){
	id,_:=primitive.ObjectIDFromHex(movieId)
	filter := bson.M{"_id":id}
	update := bson.M{"$set":bson.M{"watched":true}}
	result,err :=collection.UpdateOne(context.Background(),filter,update)
	errFun(err)
	fmt.Println("modified count:",result.ModifiedCount)
}

func deleteMovie(movieId string){
	id,_:=primitive.ObjectIDFromHex(movieId)
	filter:=bson.M{"_id":id}
	result,err :=collection.DeleteOne(context.Background(),filter)
	errFun(err)
	fmt.Println("Movie delted :",result)
}

func deleteMany()int64{
	result,err :=collection.DeleteMany(context.Background(),bson.D{{}})
	errFun(err)
	fmt.Println("Deleted count:",result.DeletedCount)
	return result.DeletedCount
}

func getAllMovies()[]model.Netflix{
	var movies[]model.Netflix
	cursor,err :=collection.Find(context.Background(),bson.D{{}})
	errFun(err)
	defer cursor.Close(context.Background())
	for cursor.Next(context.Background()){
		var movie model.Netflix
		err:=cursor.Decode(&movie)
		errFun(err)
		movies =append(movies, movie)
	}
	return movies
}


//-------------------------------------------ACTUAL CONTROLLER FUNCTION----------------------------------------------
func GetAllMovies(w http.ResponseWriter,r *http.Request){
	w.Header().Set("Content-type","application/json")
	allmovies :=getAllMovies()
	json.NewEncoder(w).Encode(allmovies)
} 
//gin-code
// func GetAllMovies(c *gin.Context) {
// 	movies := getAllMovies()
// 	c.JSON(200, movies)
// }

func CreateMovie(w http.ResponseWriter,r *http.Request){
	w.Header().Set("Content-type","application/json")
	w.Header().Set("Allow-Control-Allow-Methods","POST")
	var movie model.Netflix
	err:= json.NewDecoder(r.Body).Decode(&movie)
	errFun(err)
	insetOneMovie(movie)
	json.NewEncoder(w).Encode(movie)
}
// func CreateMovie(c *gin.Context) {
// 	var movie model.Netflix

// 	if err := c.BindJSON(&movie); err != nil {
// 		c.JSON(400, gin.H{"error": err.Error()})
// 		return
// 	}

// 	insertOneMovie(movie)
// 	c.JSON(201, movie)
// }

func UpdateMovie(w http.ResponseWriter,r *http.Request){  // note id shud go through url..not body
	w.Header().Set("Content-type","application/json")
	w.Header().Set("Allow-Control-Allow-Methods","PUT")
	params:=mux.Vars(r)
	updateMovie(params["id"])
    json.NewEncoder(w).Encode(params["id"])
}

// func UpdateMovie(c *gin.Context) {
// 	id := c.Param("id")

// 	updateMovie(id)

// 	c.JSON(200, gin.H{
// 		"updated_id": id,
// 	})
// }

func DeleteOneMovie(w http.ResponseWriter,r *http.Request){
	w.Header().Set("Content-type","application/json")
	w.Header().Set("Allow-Control-Allow-Methods","DELETE")
	params:=mux.Vars(r)
	deleteMovie(params["id"])
    json.NewEncoder(w).Encode(params["id"])
}
// func DeleteOneMovie(c *gin.Context) {
// 	id := c.Param("id")

// 	deleteMovie(id)

// 	c.JSON(200, gin.H{
// 		"deleted_id": id,
// 	})
// }
func DeleteAll(w http.ResponseWriter,r *http.Request){
	w.Header().Set("Content-type","application/json")
	w.Header().Set("Allow-Control-Allow-Methods","DELETE")
	count:=deleteMany()
	json.NewEncoder(w).Encode(count)

}
// func DeleteAll(c *gin.Context) {
// 	count := deleteMany()

// 	c.JSON(200, gin.H{
// 		"deleted_count": count,
// 	})
// }