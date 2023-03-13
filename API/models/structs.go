package models

type Workout struct{
	ID 		 float32 `json:"id"`
	Base 	 string	 `json:"base"`	
	Grip 	 string	 `json:"grip"`
	Rotation string	 `json:"rot"`
	Position string	 `json:"pos"`
}
type Muscle struct{
	ID 		float32	 `json:"id"`
	Name 	string	 `json:"name"`
}

type Workoutmuscle struct{
	ID 			float32	 `json:"id"`
	WorkoutID 	float32	 `json:"workoutid"`
	MuscleName 	string	 `json:"musclename"`
	Impact 		float32	 `json:"impact"`
}

type WorkoutMuscleWorkout struct{
	ID 			float32	 `json:"id"`
	WorkoutID 	float32	 `json:"workoutid"`
	MuscleName 	string	 `json:"musclename"`
	Impact 		float32	 `json:"impact"`
	Base 	 	string	 `json:"base"`	
	Grip 	 	string	 `json:"grip"`
	Rotation 	string	 `json:"rot"`
	Position 	string	 `json:"pos"`
}

type Account struct{
	ID 		 float32	`json:"id"`
	Fname 	 string		`json:"fname"`
	Lname	 string		`json:"lname"`
	Fullname string		`json:"fullname"`
	Email	 string		`json:"email"`
	Pwd		 string		`json:"pwd"`
	Pnum	 float32	`json:"pnum"`
	Age		 float32	`json:"age"`
	Username string		`json:"username`
}

type Healthdata struct{
	ID		float32	 `json:"id"`
	ACCID	float32	 `json:"accid"`
	Weight	float32	 `json:"weight"`
	Height	float32	 `json:"height"`
	BMI		float32	 `json:"bmi"`
	BMR		float32	 `json:"bmr"`
	Date	string	 `json:"date"`
}

type AccountHealthData struct{
	ID		 float32	`json:"id"`
	ACCID	 float32 	`json:"accid"`
	Weight	 float32	`json:"weight"`
	Height	 float32	`json:"height"`
	BMI		 float32	`json:"bmi"`
	BMR		 float32	`json:"bmr"`
	Date	 string	 	`json:"date"`
	Fullname string		`json:"fullname"`
	Email	 string		`json:"email"`
	Pnum	 float32	`json:"pnum"`
	Age		 float32	`json:"age"`
	Username string		`json:"username`
}

type Prtrack struct{
	ID			float32	 `json:"id"`
	WorkoutID 	float32	 `json:"workoutid"`
	ACCID		float32	 `json:"accid"`
	Date		string	 `json:"date"`
	Reps		float32	 `json:"reps"`
	Weight		float32	 `json:"weight"`
}

type PrTrackWorkout struct{
	ID			float32	 `json:"id"`
	WorkoutID 	float32	 `json:"workoutid"`
	ACCID		float32	 `json:"accid"`
	Date		string	 `json:"date"`
	Reps		float32	 `json:"reps"`
	Weight		float32	 `json:"weight"`
	Base 	 	string	 `json:"base"`	
	Grip 	 	string	 `json:"grip"`
	Rotation 	string	 `json:"rot"`
	Position 	string	 `json:"pos"`
}


type TestStruct struct{
	Input map[string]interface{} 
	Expected interface{}
}

type JSONdata struct{
	Data interface{} `json:"data"`
}

type Config struct {
	DB_USERNAME string
	DB_PASSWORD string
	DB_PORT     string
	DB_HOST     string
	DB_NAME     string
}