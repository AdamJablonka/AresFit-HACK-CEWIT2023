package main

import (
	api "AresFit/API/rest"
	// db "AresFit/API/database"
	// s "AresFit/API/models"
	// c "AresFit/API/config"
	// "fmt"
)	


func main(){
	// config := c.GetConfig()
	// fmt.Println(config.DB_USERNAME, config.DB_PASSWORD,  config.DB_HOST, config.DB_PORT, config.DB_NAME)
	api.API()

	// oldData := s.Account{	
	// 	ID:			4,
	// 	Fname:    "Adam",
	// 	Lname:    "Jablonka",
	// 	Fullname: "Adam Jablonka",
	// 	Email:    "ajjablonka@gmail.com",
	// 	Pwd:      "password",
	// 	Pnum:     17187155801,
	// 	Age:	  22,
	// 	}

	// newData := s.Account{
	// 	ID:			4,
	// 	Fname:    "madA",
	// 	Lname:    "Jablonka",
	// 	Fullname: "Adam Jablonka",
	// 	Email:    "ajjablonka@gmail.com",
	// 	Pwd:      "password",
	// 	Pnum:     171871558,
	// 	Age:	22,
	// 		}
	// fmt.Println(db.UpdateData(oldData, newData))
}
