package main
import "github.com/gin-gonic/gin"

func sendUserId(c *gin.Context){
	id:=c.Param("id")
	c.String(200,"UserId of the user is: %s",id)
}

func main(){
	app:=gin.Default()


	//trial test API
	app.GET("/test",func(c *gin.Context){
		c.JSON(200,gin.H{"message":"Welcome to GoLang Server",})
	})


	//params-->
	app.GET("/test/:id",sendUserId)


	app.Run()

	
}