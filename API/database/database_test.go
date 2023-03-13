package database

import (
	"testing"
	s "AresFit/API/models"
)

type test = s.TestStruct

func TestGetMuscleData(t *testing.T){
	Quads := map[string]interface{}{"muscle": "Quads"}
	UpperChest := map[string]interface{}{"muscle": "Upper Chest"}
	Lats := map[string]interface{}{"muscle": "Lats"}

	tests := []test{
		{
			Input: Quads, 
			Expected: muscle{
				ID: 25, 
				Name: "Quads",
				},
		},
		{
			Input: UpperChest, 
			Expected: muscle{
				ID: 1, 
				Name: "Upper Chest",
				},
		},
		{
			Input: Lats, 
			Expected: muscle{
				ID: 18, 
				Name: "Lats",
				},
		},
	}

	for _, testIN := range tests{
		expected := testIN.Expected.(muscle)
		if out := GetMuscleData(testIN.Input); out[0].ID != expected.ID || out[0].Name != expected.Name{
			t.Error("Test Failed: input:",testIN.Input ,", expected: ", testIN.Expected,", recieved:", out )
		}
	}
}

func TestGetWorkoutData(t *testing.T){
	bench := map[string]interface{}{"ID":2}
	lat := map[string]interface{}{"base": "lat pulldown"}

	tests := []test{
		{
			Input: bench,
			Expected: workout{
				Base: "barbell bench press",
			},
		},
		{
			Input: lat,
			Expected: workout{
				Base: "lat pulldown",
			},
		},
	}

	for _, testIN := range tests{
		expected := testIN.Expected.(workout)
		if output := GetWorkoutData(testIN.Input); output[0].Base != expected.Base{
			t.Error("Test Failed: input:",testIN.Input ,", expected: ", testIN.Expected,", recieved:", output )
		}
	}
}

func TestGetWorkoutMuscleData(t *testing.T){
	impact := map[string]interface{}{"impact":9, "muscle":"Middle Chest", "grip":"medium"}
	lat := map[string]interface{}{"base": "lat pulldown"}

	tests := []test{
		{
			Input: impact,
			Expected: wmiw{
				Base: "barbell bench press",
			},
		},
		{
			Input: lat,
			Expected: wmiw{
				Base: "lat pulldown",
			},
		},
	}

	for _, testIN := range tests{
		expected := testIN.Expected.(wmiw)
		if output := GetWorkoutMuscleData(testIN.Input); output[0].Base != expected.Base{
			t.Error("Test Failed: input:",testIN.Input ,", expected: ", testIN.Expected,", recieved:", output )
		}
	}
}


func TestGetAccountData(t *testing.T){
	gio := map[string]interface{}{"ID":3}
	adam := map[string]interface{}{"username":"WebsiteLover"}
	yigit := map[string]interface{}{"email":"yigitberke@live.com"}


	tests := []test{
		{
			Input: gio,
			Expected: account{
				ID: 3,
			},
		},
		{
			Input: adam,
			Expected: account{
				ID: 4,
			},
		},
		{
			Input: yigit,
			Expected: account{
				ID: 2,
			},
		},
	}

	for _, testIN := range tests{
		expected := testIN.Expected.(account)
		if output := GetAccountData(testIN.Input); output[0].ID != expected.ID{
			t.Error("Test Failed: input:",testIN.Input ,", expected: ", testIN.Expected,", recieved:", output )
		}
	}
}

func TestGetHealthData(t *testing.T){}

func TestGetPRData(t * testing.T){}

func TestGetPRData_MUSCLE(t *testing.T){}