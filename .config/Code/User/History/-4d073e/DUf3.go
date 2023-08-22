package main

import "fmt"
import "time"

func main(){
    now := time.Now()
    var date string = now.Format("2006-01-02")
    
    var day string = ""

    for i := len(date) - 1; i >= 0; i-- {
        if date[i] == '-' {
            break
        }

        day = string(date[i]) + day
    }

    fmt.Println(day)
}
