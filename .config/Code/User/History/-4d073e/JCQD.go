package main

import "fmt"
import "time"
import "strconv"

func main(){
    now := time.Now()
    var date string = now.Format("2006-01-02")
    
    var day string = ""

    for i := len(date) - 1; date[i] != '-'; i-- {

        day =(string(date[i]) + day)
    }
    fmt.Println("Hoje é dia de estudar")

    foo,_ := strconv.ParseInt(day, 0, 10)
    if foo%2==0{
        fmt.Println("paginas da web e informática")
    }else{
        fmt.Println("inglês e algorítmo")
    }
}
