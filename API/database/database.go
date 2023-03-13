package database

import (
    "strings"
	s "AresFit/API/models"
	"database/sql"
	"fmt"
	"log"
    "reflect"
    c "AresFit/API/config"
	_ "github.com/go-sql-driver/mysql"
)

//structs
type config         = s.Config
type workout 		= s.Workout
type muscle 		= s.Muscle
type impact		 	= s.Workoutmuscle
type wmiw           = s.WorkoutMuscleWorkout
type account		= s.Account
type healthdata		= s.Healthdata
type pr				= s.Prtrack
type prworkout      = s.PrTrackWorkout
type accHealth      = s.AccountHealthData
/*
* CONNECTION
*/

/*
*TEST PASSING

CONNECTION TO DATABASE
query: sql query to run
returns the sql values or error
*/
func connect(query string) (*sql.Rows, error) {
	CONFIG := c.GetConfig()
    configString := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s", CONFIG.DB_USERNAME, CONFIG.DB_PASSWORD,  CONFIG.DB_HOST, CONFIG.DB_PORT, CONFIG.DB_NAME)
    db, err := sql.Open("mysql", configString)
	defer db.Close()
	if err != nil{
		log.Fatal()
	}

	res, err := db.Query(query)

	if err != nil{
		panic(err.Error())
	}
	
	return res, err
}

/*
* GET METHODS
*/

/*
*TEST PASSING
Getting muscle table data
params:
    nil if none
    interface build like muscle struct if some
return muscle data
*/
func GetMuscleData(params map[string]interface{}) ([]muscle) {
    var sql strings.Builder
    sql.WriteString("SELECT * FROM MUSCLE")

    if len(params) > 0 { 
        sql.WriteString(" WHERE ")
        var conditions []string
        for name, value := range params {
            condition := fmt.Sprintf("%s='%v'", name, value)
            conditions = append(conditions, condition)
        }

        sql.WriteString(strings.Join(conditions, " AND "))
    }

    result, err := connect(sql.String())
    if err != nil {
        return nil
    }
    defer result.Close()

    var values []muscle
    
    for result.Next(){
		var t muscle
		if err := result.Scan(
				&t.ID, 
				&t.Name, 
				); err != nil{
			return values
		}
		values = append(values, t)
	}

    if err = result.Err(); err != nil{
            return values
    }
        
    return values
}


/*
* TESTED PASSING
Getting workout table data
params:
    nil if none
    interface build like workout struct if some
return workout data
*/
func GetWorkoutData(params map[string]interface{}) ([]workout) {
    // Start building the SQL query
    var sql strings.Builder
    sql.WriteString("SELECT * FROM WORKOUT")

    // Check if there are any parameters
    if len(params) > 0 {
        // Add the WHERE keyword and start building the parameter conditions
        sql.WriteString(" WHERE ")
        var conditions []string
        for name, value := range params {
            // Build the parameter condition
            condition := fmt.Sprintf("%s='%v'", name, value)
            conditions = append(conditions, condition)
        }
        // Join the parameter conditions with " AND " and add them to the SQL query
        sql.WriteString(strings.Join(conditions, " AND "))
    }

    // Get the result from SQL
    result, err := connect(sql.String())
    if err != nil {
        return nil
    }
    defer result.Close()

    var values []workout
    
    for result.Next(){
        var t workout
        if err := result.Scan(
                &t.ID, 
                &t.Base,
                &t.Grip,
                &t.Rotation,
                &t.Position, 
                ); err != nil{
            return values
        }
        values = append(values, t)
    }

    if err = result.Err(); err != nil{
            return values
    }
        
    return values
}


/*
*TESTED PASSING
Getting workout_muscle_impact table data
params:
    nil if none
    interface build like wmiw struct if some
return workout_muscle_impact inner joined w workout data
*/
func GetWorkoutMuscleData(params map[string]interface{}) ([]wmiw) {
    // Start building the SQL query
    var sql strings.Builder
    sql.WriteString("SELECT wmi.id, wmi.workoutID, wmi.muscle, wmi.impact, w.base, w.grip, w.pos, w.rot FROM WORKOUT_MUSCLE_IMPACT wmi INNER JOIN WORKOUT w ON w.id = wmi.id ")

    // Check if there are any parameters
    if len(params) > 0 {
        // Add the WHERE keyword and start building the parameter conditions
        sql.WriteString(" WHERE ")
        var conditions []string
        for name, value := range params {
            // Build the parameter condition
            condition := fmt.Sprintf("%s='%v'", name, value)
            conditions = append(conditions, condition)
        }
        // Join the parameter conditions with " AND " and add them to the SQL query
        sql.WriteString(strings.Join(conditions, " AND "))
    }

    // Get the result from SQL
    result, err := connect(sql.String())
    if err != nil {
        return nil
    }
    defer result.Close()

    var values []wmiw
    
    for result.Next(){
        var t wmiw
        if err := result.Scan(
                &t.ID, 
                &t.WorkoutID,
                &t.MuscleName,
                &t.Impact,
                &t.Base,
                &t.Grip,
                &t.Rotation,
                &t.Position,
                ); err != nil{
            return values
        }
        values = append(values, t)
    }

    if err = result.Err(); err != nil{
            return values
    }
        
    return values
}


/*
* TESTED WORKING
getting all account data
params:
    nil if none
    map like account struct if some
return account data
*/
func GetAccountData(params map[string]interface{}) ([]account) {
    // Start building the SQL query
    var sql strings.Builder
    sql.WriteString("SELECT * FROM ACCOUNT_INFO")

    // Check if there are any parameters
    if len(params) > 0 {
        // Add the WHERE keyword and start building the parameter conditions
        sql.WriteString(" WHERE ")
        var conditions []string
        for name, value := range params {
            // Build the parameter condition
            condition := fmt.Sprintf("%s='%v'", name, value)
            conditions = append(conditions, condition)
        }
        // Join the parameter conditions with " AND " and add them to the SQL query
        sql.WriteString(strings.Join(conditions, " AND "))
    }

    // Get the result from SQL
    result, err := connect(sql.String())
    if err != nil {
        return nil
    }
    defer result.Close()

    var values []account
    
    for result.Next(){
        var t account
        if err := result.Scan(
                &t.ID, 
                &t.Fname,
                &t.Lname,
                &t.Fullname,
                &t.Email,
                &t.Pwd,
                &t.Pnum,
                &t.Age,
                &t.Username,
                ); err != nil{
            return values
        }
        values = append(values, t)
    }

    if err = result.Err(); err != nil{
            return values
    }
        
    return values
}

/*
!UNTESTED FINISHED
getting all health data
params:
    nil if none
    map like AccountHealthData struct if some
return accHealth values
*/
func GetHealthData(params map[string]interface{}) ([]accHealth) {
    // Start building the SQL query
    var sql strings.Builder
    sql.WriteString("SELECT hi.id, hi.weight, hi.weight, hi.BMI, hi.BMR, hi.date, hi.accountID, ai.fullname, ai.email, ai.pnum, ai.username FROM HEALTH_INFO hi INNER JOIN ACCOUNT_INFO ai ON ai.id = hi.accountID ")

    // Check if there are any parameters
    if len(params) > 0 {
        // Add the WHERE keyword and start building the parameter conditions
        sql.WriteString(" WHERE ")
        var conditions []string
        for name, value := range params {
            // Build the parameter condition
            condition := fmt.Sprintf("%s='%v'", name, value)
            conditions = append(conditions, condition)
        }
        // Join the parameter conditions with " AND " and add them to the SQL query
        sql.WriteString(strings.Join(conditions, " AND "))
    }

    // Get the result from SQL
    result, err := connect(sql.String())
    if err != nil {
        return nil
    }
    defer result.Close()

    var values []accHealth
    
    for result.Next(){
        var t accHealth
        if err := result.Scan(
                &t.ID, 
                &t.ACCID,
                &t.Weight,
                &t.Height,
                &t.BMI,
                &t.BMR,
                &t.Date,
                &t.Fullname,
                &t.Email,
                &t.Pnum,
                &t.Age,
                &t.Username,
                ); err != nil{
            return values
        }
        values = append(values, t)
    }

    if err = result.Err(); err != nil{
            return values
    }
        
    return values
}


/*
!UNTESTED FINISHED
getting all pr data
params:
    nil if none
    map like PrtrackWorkout struct if some
return list of pr values
*/
func GetPRData(params map[string]interface{}) ([]prworkout) {
    // Start building the SQL query
    var sql strings.Builder
    sql.WriteString("SELECT pt.id, pt.workoutID, pt.date_time, pt.reps, pt.weight, pt.accountID, w.base, w.grip, w.pos, w.rot FROM PR_TRACKER pt INNER JOIN WORKOUT w ON w.id = pt.workoutID ")

    // Check if there are any parameters
    if len(params) > 0 {
        // Add the WHERE keyword and start building the parameter conditions
        sql.WriteString(" WHERE ")
        var conditions []string
        for name, value := range params {
            // Build the parameter condition
            condition := fmt.Sprintf("%s='%v'", name, value)
            conditions = append(conditions, condition)
        }
        // Join the parameter conditions with " AND " and add them to the SQL query
        sql.WriteString(strings.Join(conditions, " AND "))
    }

    // Get the result from SQL
    result, err := connect(sql.String())
    if err != nil {
        return nil
    }
    defer result.Close()

    var values []prworkout
    
    for result.Next(){
        var t prworkout
        if err := result.Scan(
                &t.ID, 
                &t.WorkoutID,
                &t.ACCID,
                &t.Date,
                &t.Reps,
                &t.Weight,
                &t.Base,
                &t.Grip,
                &t.Rotation,
                &t.Position,
                ); err != nil{
            return values
        }
        values = append(values, t)
    }

    if err = result.Err(); err != nil{
            return values
    }
        
    return values
}


/*
*POSTING METHODS
*/

/*
*TESTED WORKING
POST TO: account, health, tracker tables
data: model after struct for table
note: id must be empty since auto populates

return true if worked and false if not
*/
func PostData(data interface{}) bool{
    var (
        tableName string
        columns   []string
        values    []string
    )

    // Get the type and value of the input
    valueType := reflect.TypeOf(data)
    value := reflect.ValueOf(data)

    // Determine the table name based on the type of the input
    switch valueType {
        case reflect.TypeOf(account{}):
            tableName = "ACCOUNT_INFO"
        case reflect.TypeOf(healthdata{}):
            tableName = "HEALTH_INFO"
        case reflect.TypeOf(pr{}):
            tableName = "PR_TRACKER"
    }

    // Construct the list of column names and values
    for i := 0; i < valueType.NumField(); i++ {
        field := valueType.Field(i)
        columnName := strings.ToLower(field.Name)
        columnValue := value.Field(i).Interface()

        columns = append(columns, columnName)
        values = append(values, fmt.Sprintf("'%v'", columnValue))
    }

    // Construct the final SQL query string
    sql := fmt.Sprintf("INSERT INTO %s(%s) VALUES(%s)", tableName, strings.Join(columns, ","), strings.Join(values, ","))
    
    result, err := connect(sql)
    if err != nil {
        return false
    }
    defer result.Close()
    return true
}



/*
*UPDATING METHODS
*/

/*
*TESTED WORKING
UPDATING DATA ON THE health, pr_tracker, and account table
old data must grab all values and be shaped like table struct
new data must grab all values and be shaped like table struct
note: make sure that columns are not empty bc then it will not work

return bool- true if worked and false if not
*/
func UpdateData(oldData interface{}, newData interface{}) bool {
    var (
        tableName string
        setValues []string
        whereValues []string
    )

    // Get the types and values of the input data
    oldType := reflect.TypeOf(oldData)
    oldValue := reflect.ValueOf(oldData)
    newType := reflect.TypeOf(newData)
    newValue := reflect.ValueOf(newData)

    // Determine the table name based on the type of the input
    switch oldType {
        case reflect.TypeOf(account{}):
            tableName = "ACCOUNT_INFO"
        case reflect.TypeOf(healthdata{}):
            tableName = "HEALTH_INFO"
        case reflect.TypeOf(pr{}):
            tableName = "PR_TRACKER"
    }

    // Construct the list of column names and values to set
    for i := 0; i < newType.NumField(); i++ {
        field := newType.Field(i)
        columnName := strings.ToLower(field.Name)
        columnValue := newValue.Field(i).Interface()

        setValues = append(setValues, fmt.Sprintf("%s='%v'", columnName, columnValue))
    }

    // Construct the list of column names and values to match in the WHERE clause
    for i := 0; i < oldType.NumField(); i++ {
        field := oldType.Field(i)
        columnName := strings.ToLower(field.Name)
        columnValue := oldValue.Field(i).Interface()

        whereValues = append(whereValues, fmt.Sprintf("%s='%v'", columnName, columnValue))
    }

    // Construct the final SQL query string
    sql := fmt.Sprintf("UPDATE %s SET %s WHERE %s", tableName, strings.Join(setValues, ","), strings.Join(whereValues, " AND "))
    
    result, err := connect(sql)
    if err != nil {
        return false
    }
    defer result.Close()
    fmt.Println(sql)
    return true
}