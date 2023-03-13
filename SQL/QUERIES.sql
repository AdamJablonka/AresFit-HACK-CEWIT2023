--getting data based on what u want from workout_muscle_impact
--getting by workout params
SELECT * FROM WORKOUT_MUSCLE_IMPACT 
WHERE id=(SELECT id FROM WORKOUT WHERE base='' AND grip='' AND pos='')

SELECT * FROM WORKOUT_MUSCLE_IMPACT
WHERE impact=3

UPDATE ACCOUNT_INFO 
    SET 
    id='0',
    fname='madA',
    lname='Jablonka',
    fullname='Adam Jablonka',
    email='ajjablonka@gmail.com',
    pwd='password',
    pnum='17187155801',
    age='0' 
WHERE id='4' AND fname='' AND lname='' AND fullname='' AND email='' AND pwd='' AND pnum='0' AND age='0'

UPDATE ACCOUNT_INFO SET 
                        id='0',fname='madA',lname='Jablonka',
                        fullname='Adam Jablonka',email='ajjablonka@gmail.com',pwd='password',
                        pnum='17187155801',age='0' 
WHERE id='4' AND fname='madA' AND lname='Jablonka' AND fullname='Adam Jablonka' AND 
email='ajjablonka@gmail.com' AND pwd='password' AND pnum='17187155801' AND age='22'


