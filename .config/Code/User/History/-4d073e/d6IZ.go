package main

import "fmt"
import "time"

func main(){
    now := time.Now()
    var date string = now.Format("2006-01-02")
    
    var day string = ""

    for i := len(date) - 1; date[i] != '-'; i-- {

        day =(string(date[i]) + day)strconv. Atoi(day)
    var number int = (int)day
    if number%2==0{
        fmt.Println("paginas da web e informática")
    }else{
        fmt.Println("inglês e algorítmo")
    }
}
