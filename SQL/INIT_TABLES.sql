
CREATE TABLE WORKOUT(
	id 		int 	NOT NULL AUTO_INCREMENT,
	base	char	NOT NULL,
	grip	char 	NOT NULL,
	pos		char 	NOT NULL,
    rot     char    NOT NULL,
	CONSTRAINT BASE_WORKOUT_PK PRIMARY KEY (id)
);

CREATE TABLE MUSCLE(
	id		int		NOT NULL AUTO_INCREMENT,
	muscle	char	NOT NULL,
	CONSTRAINT MUSCLE_PK PRIMARY KEY (id),
	INDEX (muscle)
);


CREATE TABLE WORKOUT_MUSCLE_IMPACT(
	id 				int     NOT NULL AUTO_INCREMENT,
	workoutID		int     NOT NULL,
	muscle	 		char    NOT NULL,
	impact			int	    NOT NULL,
	CONSTRAINT WORKOUT_MUSCLE_PK PRIMARY KEY (id),
	CONSTRAINT WORKOUT_FK FOREIGN KEY (workoutID) REFERENCES WORKOUT(id),
	CONSTRAINT MUSCLE_FK FOREIGN KEY (muscle) REFERENCES MUSCLE(muscle)
);

CREATE TABLE HEALTH_INFO(
	id			INT	 NOT NULL AUTO_INCREMENT,
	weight		INT,
	height		INT,
	BMI			INT,
	BMR			INT,
    date    	DATETIME,
    accountID 	INT NOT NULL,
	CONSTRAINT HEALTH_INFO_PK PRIMARY KEY (id),
    CONSTRAINT ACCOUNTID_FK FOREIGN KEY (accountID) REFERENCES ACCOUNT_INFO(id)
);


CREATE TABLE ACCOUNT_INFO(
	id			INT			    NOT NULL AUTO_INCREMENT,
	fname		CHAR(50)	    NOT NULL,
	lname		CHAR(50)	    NOT NULL,
	fullname	CHAR(100)	    NOT NULL,
	email		VARCHAR(100)    NOT NULL,
	pwd			VARCHAR(100)    NOT NULL,
	pnum		INT			    DEFAULT NULL,
	age			INT			    DEFAULT NULL,
	CONSTRAINT ACCOUNT_PK PRIMARY KEY (id)
);


CREATE TABLE PR_TRACKER(
	id			INT 		NOT NULL AUTO_INCREMENT,
	workoutID	INT			NOT NULL,
	date_time	DATETIME	NOT NULL,
	reps		INT			NOT NULL,
	weight		INT			NOT NULL,
	accountID	INT			NOT NULL,
	CONSTRAINT TRACKER_WEIGHT_PK PRIMARY KEY (id),
	CONSTRAINT WORKOUTID_FK FOREIGN KEY (workoutID) REFERENCES WORKOUT(id),
	CONSTRAINT PRACCOUNTID_FK FOREIGN KEY (accountID) REFERENCES ACCOUNT_INFO(id)
);