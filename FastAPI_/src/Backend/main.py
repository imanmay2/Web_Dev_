from fastapi import FastAPI

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