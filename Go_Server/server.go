package main
import (
    "github.com/gin-gonic/gin"
)

func sendUserId(c *gin.Context){
	id:=c.Param("id")
	c.String(200,"UserId of the user is: %s",id)
}

type Person struct{
	Name string `json:"name" binding:"required"`
	Age string `json:"age" binding:"required"`
}

func main(){
	app:=gin.Default()


	//trial test API
	app.GET("/test",func(c *gin.Context){
		c.JSON(200,gin.H{"message":"Welcome to GoLang Server",})
	})


	//params-->
	app.GET("/test/:id",sendUserId)

	app.POST("/sendData",func(c *gin.Context){
		var person Person

		if err:=c.ShouldBindJSON(&person); err!=nil{
			c.JSON(400,gin.H{"Error":err.Error()})
			return
		}

		c.JSON(200,gin.H{
			"Name":person.Name,
			"Age":person.Age,
		})
	})
	
	app.Run()

	
}