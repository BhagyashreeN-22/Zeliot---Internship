// package main
// import (
// 	"fmt"
// )

// func main(){
// 	mychannel := make(chan int)  // channel creation
	
// 	go func(){ 
// 		mychannel<- 5    // writing values into channel
// 	}()

// 	value := <-mychannel   // Reading values from channel

// 	fmt.Println(value)
// }

package main

import (
	"fmt"
	"sync"
)

func main() {

	ch := make(chan string)
	var wg sync.WaitGroup

	wg.Add(2)

	go func() {
		defer wg.Done()
		ch <- "Hello from Goroutine 1"
	}()
	go func() {
		defer wg.Done()
		ch <- "Hello from Goroutine 2"
	}()
	go func() {
		wg.Wait()
		close(ch)
	}()
	for msg := range ch {
		fmt.Println(msg)
	}
}