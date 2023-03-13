#!/usr/bin/env python3
import os
import platform
import subprocess

# Determine the platform we're running on
plat = platform.system()

# Get the current working directory
cwd = os.getcwd()

# Start the servers
if plat == 'Windows':
    subprocess.Popen(['start', 'cmd', '/c', 'cd API && go run main.go'], shell=True)
    subprocess.Popen(['start', 'cmd', '/c', 'cd AresFitApp && npm run web'], shell=True)
elif plat == 'Darwin':
    # AppleScript command to launch a new Terminal window
    terminal_cmd = 'tell application "Terminal" to do script'
    
    # Launch the servers in separate Terminal windows
    subprocess.Popen(['osascript', '-e', f'{terminal_cmd} "cd \'{cwd}/API\' && go run main.go"'])
    subprocess.Popen(['osascript', '-e', f'{terminal_cmd} "cd \'{cwd}/AresFitApp\' && npm run web"'])
else:
    print('Unsupported platform:', plat)
