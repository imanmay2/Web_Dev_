package main

import (
	"github.com/gin-gonic/gin"
	"fmt"
)


type User struct{
	Name string `json:"name" binding:"required"`
	Email string `json:"email" binding:"required,email"`
	Age int `json:"age"`
}

func main(){
	app:=gin.Default();

	//get request
	app.GET("/getData",func(ctx *gin.Context){
		ctx.JSON(200,gin.H{"message":"Welcome to GoLang"});
	})


	app.GET("/user/:id",func(ctx *gin.Context){
		id:=ctx.Param("id");
		ctx.String(200,"User ID : %s",id);
	})

	//post request
	app.POST("/setData",func(ctx *gin.Context){
		var userData User;
		if err:=ctx.ShouldBindJSON(&userData);
		err!=nil{
			ctx.JSON(400,gin.H{"Error":err.Error()});
			return;
		}

		//No error
		fmt.Println(userData);
		ctx.JSON(200,gin.H{"Message":"Data saved successfully."});
	})
	

	app.Run(":8080");
}