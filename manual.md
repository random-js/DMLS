##------------------Functions:------------------

start             (json_file)
signIn            (username,password)
signUp            (username,password)
signOut           (username)
changePassword    (username,newPassword)
changeUsername    (username,newUsername)
delUser           (username)
saveJSON          (path)
getCr             (username)
configStart       (json_file)
conc              ()
getState          (username)
lock              (username,time)
unlock            (username)
accounts          ()
recent            (username)
data              (username)
saveData          (username,data)


#start(json)
loads json for specifed path. NOTE: THIS DOES NOT SUPPORT VARIABLE LOADING. THE USE OF configStart IS HIGHLY RECOMMENDED.

#signIn(username, password)
Signs in a user (anti-double-login support. A user can only be logged in once.)

#signUp(username,password)
Adds a user (anti-dulplication support)

#signOut(username)
Signs out a user.

#changePassword(username,newPassword)
Changes a users password.

#changeUsername(username,newUsername)
Changes a users username. (+checks if it is already taken)

#delUser(username)
Deletes a user

#getCr(username)
Get credentials of the specified user.
Note: THIS DOES NOT USE THE RETURN SYNTAX.

#saveJSON(json)
Save JSON (accounts) to the specified path

#configStart(file)
Starts using a config file. see config file notice for more info

#conc
returns connections array of server

#getState(username)
Returns state object. Note: THIS DOES NOT USE THE RETURN SYNTAX.
It retruns: {locked: true/false, time: lockTime}

#lock(username,time)
Lock the user for a specified timeout

#unlock(username)
Unlocks the specified user

#accounts
Returns the accounts array. Usage recommended only for debugging.

#recent(username)
Returns the recent array of a user

#data(username)
Returns the data of the specified user.

#saveData(username,data)
Save data to a user.


##------------------Info------------------


#Info: Standard return syntax
Most commands (all that dont have it noted) use the standard Return Syntax:
(Returns an Object): {succ: true/false, string: "error message. usually empty hen succ is true"}
succ: if the command was successful or not

#Note: Use start command
The start command also loads the JSON. Therefore if you don't use it your previously existing JSON users will be overwritten by the use of saveJSON

#Info: config file
The file config.json is an file that is used (optionally). You should use it. Its purpose is to execute the start command with defaults and set internal variables to predefined defaults.

#Note: Defaults overwrite
Using default will overwrite any before loaded variables, as well as start.

#Note: Time is always in ms

#Note: All functions require all parameters. When not all are given, it may cause errors/problems

#Note: The recents array of an user is saved when saving json, but not loaded with server.start
