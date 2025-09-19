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


	app.POST("/setData2",func(ctx *gin.Context){
		Name:=ctx.PostForm("name");
		Email:=ctx.PostForm("email");
		Age:=ctx.PostForm("age");

		ctx.JSON(200,gin.H{"Name":Name,"Email":Email,"Age":Age});
		ctx.String(200,"\nData Saved successfully");
	})

	//grouping the routes.
	

	app.Run(":8080");
}