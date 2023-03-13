package config

import (
	s "AresFit/API/models"
	"log"
	"os"
	"path/filepath"
	"github.com/tkanos/gonfig"
)


type config = s.Config

func GetConfig(params ...string) config {
	configuration := config{}
	fileName := "../API/config/dev_config.json"
	absPath, err := filepath.Abs(fileName)
	if err != nil {
		log.Fatalf("Error getting absolute path of file: %v", err)
	}
	if _, err := os.Stat(absPath); os.IsNotExist(err) {
		log.Fatalf("File does not exist: %s", absPath)
	}
	gonfig.GetConf(fileName, &configuration)
	return configuration
}