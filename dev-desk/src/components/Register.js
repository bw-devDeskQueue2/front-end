<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8aab2c3eb5a2ff2a0e0aa91db083aaa5e62a551e
import React, {useState, useEffect} from 'react'

import {Form, Label, Col, Row, Button} from 'reactstrap'
import * as yup from 'yup'


const Register = () => {

    const validate = (event) => {
        yup.reach(formschema,event.target.name)
        .validate(event.target.type === 'checkbox'? event.target.checked: event.target.value)
        .then( valid => {
            setErrors({
                ...errors,
                [event.target.name]:''
            })
        })
        .catch( err => {
            console.log('error:', err.errors)
            setErrors({ ...errors,
            [event.target.name]:err.errors[0]})
        })
    }

    useEffect(()=> {
        formschema.isValid(formData).then(valid=>{
            setButtonDisabled(!valid);
        })
    })

    const formschema = yup.object().shape({
        username:yup.string().required('Username is required'),
        password:yup.string().required('Password is required').matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
        repassword:yup.string().required('Must reenter password').oneOf([yup.ref('password'), null], 'Passwords must match'),
        helperCheck: yup.boolean(),
        studentCheck: yup.boolean()

    })

    const [formData, setFormData] = useState({
        username:'',
        password:'',
        repassword:'',
        helperCheck:false,    
        studentCheck:false
    })

    const [errors,setErrors] = useState ({
        username:'',
        password:'',
        repassword:'',
        helperCheck:'',    
        studentCheck:''        
    })

    const eventChange = (event) => {
        event.persist()
        console.log(event)
        validate(event)
        setFormData({ ...formData,
            [event.target.name]: event.target.type === 'checkbox'? event.target.checked: event.target.value
        })

    }

    const [buttonDisabled, setButtonDisabled] = useState(true)

    return(
        <>
            <Form>
                <Col>
                    <Row>
                        <Label>
                            Username
                            <input name ='username' type='text' data-cy='username' value={formData.username} onChange={eventChange}>
                            </input>                    
                        </Label>                    
                    </Row>
                    <Row>
                        <Label>
                            Password
                            <input name ='password' type='text' data-cy='password' value={formData.password} onChange={eventChange}>
                            </input>                    
                        </Label>                    
                    </Row>
                    <Row>
                        <Label>
                            Re-enter Password
                            <input name ='repassword' type='text' data-cy='repassword'value={formData.repassword} onChange={eventChange} >
                            </input>                    
                        </Label>                    
                    </Row>
                    <Row>
                        <Label>
                            Are you a Helper?
                            <input name ='helperCheck' type='checkbox' data-cy='helpercheck' value={formData.helperCheck} onChange={eventChange}>
                            </input>                    
                        </Label>                    
                    </Row>
                    <Row>
                    <Label>
                        Are you a Student?
                        <input name ='studentCheck' type='checkbox' data-cy='studentcheck' value={formData.studentCheck} onChange={eventChange} >
                        </input>                    
                    </Label>                    
                    </Row>
                    <Row>
                        <Button disabled ={buttonDisabled}>Register</Button>                    
                    </Row>
                </Col>
            </Form>
<<<<<<< HEAD
=======
import React from 'react'
import {Link,Route} from 'react-router-dom'
import {Button} from 'reactstrap'
import StaffTicket from './StaffTicket'
import TicketList from './TicketList'

const StaffDashboard = () => {
    return (
        <>
        <h2>Welcome to your Staff Dashboard</h2>
        <Link to ='/staffticket'>
            <Button>Open Staff Tickets</Button>
        </Link>

        <Link to ='/ticketlist'>
            <Button>Open Staff Tickets</Button>
        </Link>

            <Route to ='/staffticket'>
                <StaffTicket/>
            </Route>
            
            <Route to ='/ticketlist'>
                <TicketList/>
            </Route>
            
>>>>>>> bc7db185ec9f269878e60d3a5f32ef90738103c8
=======
>>>>>>> 8aab2c3eb5a2ff2a0e0aa91db083aaa5e62a551e
        </>
    )
}

<<<<<<< HEAD
<<<<<<< HEAD
export default Register
=======
export default StaffDashboard
>>>>>>> bc7db185ec9f269878e60d3a5f32ef90738103c8
=======

export default Register

>>>>>>> 8aab2c3eb5a2ff2a0e0aa91db083aaa5e62a551e
