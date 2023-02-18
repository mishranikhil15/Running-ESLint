const app =require("express")();

app.get("/",(req,res)=>{
  res.send("Hello!");
})

app.listen(4100,()=>{
    console.log("server is running at port 4100")
})