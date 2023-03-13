package rest

import (
	db "AresFit/API/database"
	s "AresFit/API/models"
	"net/http"
	"github.com/gin-gonic/gin"
)

//structs
type workoutDATA 		= s.Workout
type muscleDATA 		= s.Muscle
type workoutMuscleDATA	= s.Workoutmuscle
type accountDATA 		= s.Account
type healthDATA 		= s.Healthdata
type prtrackDATA 		= s.Prtrack
type jsondata 			= s.JSONdata

/*
*TESTED WORKING
GET - METHOD:
	gets all workout muscle impact data

*/
func GET_muscledata_json(c *gin.Context){
	var query = make(map[string]interface{})
	baseQ 	:= c.Query("base")
	gripQ 		:= c.Query("grip")
	positionQ 	:= c.Query("position")
	rotationQ 	:= c.Query("rotation")
	impactQ 	:= c.Query("impact")
	muscleQ 	:= c.Query("muscle")
    
    // check if any query parameters exist
    if len(c.Request.URL.Query()) > 0 {

        // add non-empty query parameters to the query map
        if len(baseQ) > 0 {
            query["base"] = baseQ
        }
        if len(gripQ) > 0 {
            query["grip"] = gripQ
        }
        if len(positionQ) > 0 {
            query["pos"] = positionQ
        }
        if len(rotationQ) > 0 {
            query["rot"] = rotationQ
        }
        if len(impactQ) > 0 {
            query["impact"] = impactQ
        }
        if len(muscleQ) > 0 {
            query["muscle"] = muscleQ
        }
    }else{
		data := jsondata{
			Data: db.GetWorkoutMuscleData(nil),
		}
		c.IndentedJSON(http.StatusOK, data)
		return
	}


	data := jsondata{
		Data: db.GetWorkoutMuscleData(query),
	}
	c.IndentedJSON(http.StatusOK, data)

	// if ((len(musclequery) > 0) && len(impactQ) > 0){
	// 	data := jsondata{
	// 		Data: db.GetWorkoutMuscleData(musclequery),
	// 	}
	// 	c.IndentedJSON(http.StatusOK, data)
	// }else if (len(query) > 0){
	// 	//when the data tree is good get all of the values
	// 	data := jsondata{
	// 		Data: db.GetWorkoutMuscleData(query),
	// 	}
	// 	c.IndentedJSON(http.StatusOK, data)
	// }else if (len(musclequery) > 0){
	// 	data := jsondata{
	// 		Data: db.GetWorkoutMuscleData(musclequery),
	// 	}
	// 	c.IndentedJSON(http.StatusOK, data)
	// }   
}


/*
*TESTED WORKING
GET - METHOD:
	gets all account data needing account id
*/
func GET_accountdata_json(c *gin.Context){
	idData := map[string]interface{}{"ID":c.Param("id")}
	data := jsondata{
		Data: db.GetAccountData(idData),
	}
	c.IndentedJSON(http.StatusOK, data)
}

/*
!UNTESTED UNFINISHED
GET - METHOD:
	gets all health data with id
*/
func GET_healthdata_json(c *gin.Context){
	weightData 	:= c.Query("weight")
	heightData 	:= c.Query("height")
	bmiData 	:= c.Query("bmi")
	bmrData 	:= c.Query("bmr")
	date 		:= c.Query("date")

	weightDatalen := len(weightData)
	heightDatalen := len(heightData)
	bmiDatalen := len(bmiData )
	bmrDatalen := len(bmrData)
	datelen := len(date)

	switch{
	case weightDatalen> 0 && heightDatalen>0 && bmiDatalen>0 && bmrDatalen>0 && datelen>0:
		//GetHealthData()
	default:
		data := jsondata{
			Data: db.GetHealthData(nil),
		}
		c.IndentedJSON(http.StatusOK, data)

	}
}

/*
!UNTESTED FINISHED
GET - METHOD:
	gets all tracker data with id
	optional values for weight, reps, date
*/
func Get_trackerdata_json(c *gin.Context){
	var query = make(map[string]interface{})
	query["ID"] = c.Param("id")
	
	weight := c.Query("weight")
	reps := c.Query("resp")
	date := c.Query("date")

	if len(c.Request.URL.Query()) > 0 {

        // add non-empty query parameters to the query map
        if len(weight) > 0 {
            query["weight"] = weight
        }
        if len(reps) > 0 {
            query["reps"] = reps
        }
        if len(date) > 0 {
            query["date"] = date
        }
		data := jsondata{
			Data: db.GetPRData(query),
		}
		c.IndentedJSON(http.StatusOK, data)
	}

	data := jsondata{
		Data: db.GetPRData(query),
	}
	c.IndentedJSON(http.StatusOK, data)
}


//router driver make all get and post requests here
func API(){
	router := gin.Default()
	
	/*
	no params = all values
	options, base, grip, position, rotation, impact, muscle
	?ex: http://localhost:8080/data/workout?base=barbell%20bench%20press&impact=8
	*/
	router.GET("/data/workout",GET_muscledata_json)
	
	/*
	gets account data
	needs account id to retrieve data
	?ex: http://localhost:8080/data/account/2
	*/
	router.GET("/data/account/:id", GET_accountdata_json)

	/*
	!no data in database
	needs an account id
	options: weight, height, bmi, bmr, date
	*/
	router.GET("data/health/:id", GET_healthdata_json)

	/*
	!no data in database
	options: date, workout, weight, reps
	*/
	router.GET("data/tracker/:id", Get_trackerdata_json)


	/*
	!NOT IMPLEMENTED 
	body: shaped like account struct
	*/

	router.POST("push/account")
	/*
	!NOT IMPLEMENTED 
	body: shaped like health struct
	*/

	router.POST("push/health")
	/*
	!NOT IMPLEMENTED 
	body: shaped like tracker struct
	*/
	router.POST("push/tracker")


	/*
	!NOT IMPLEMENTED 
	body: shaped like patch_account struct
	*/
	router.PATCH("update/account")
	/*
	!NOT IMPLEMENTED 
	body: shaped like patch_health struct
	*/
	router.PATCH("update/health")
	/*
	!NOT IMPLEMENTED 
	body: shaped like patch_tracker struct
	*/
	router.PATCH("update/tracker")
	
	//*activate the server
	router.Run("localhost:8080")
}