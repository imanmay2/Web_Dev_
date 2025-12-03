from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional
import uvicorn
app=FastAPI();

# basic get request . 
@app.get('/')
def printConsole():
    return {'msg':"Welcome to FastAPI"}


@app.get('/about')
def about():
    return {"Data":"Welcome to About section"}


# dynamic routing / Path parameters.
@app.get('/about/{id_}')
def about(id_:int):
    return {"data" : "Welcome to the about page","id":id_}


# query parameter.
@app.get("/blog/")
def blog(limit:str,published:bool=False):
    print(limit);
    if(published):
        return {'data':f"{limit} published blogs from the database."}
    else:
        return {'data':f"{limit} blogs from the database"}
    

class Blog(BaseModel):
    title:str
    created_at:Optional[str]

@app.post("/blogs")
def createBlog(request:blog):
    return {"data": f"Welcome to the blog and it's title is : {blog.title}"}