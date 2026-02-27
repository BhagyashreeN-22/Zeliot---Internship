// 
package main
import (
	"fmt"
	"sync"
)
var wg sync.WaitGroup

func printNumbers() {
	defer wg.Done()
	for i := 1; i <= 5; i++ {
		fmt.Println(i)
	}
}

func printLetters() {
	defer wg.Done()
	for i := 'a'; i <= 'e'; i++ {
		fmt.Println(string(i))
	}
}

func main() {
	wg.Add(2)
	go printNumbers()
	go printLetters()
    wg.Wait()
}
