import React from "react";
import { Card, Form, Input, Button } from "./form";

const LoginForm = () => {
    
    return(
        <Card>
            <Form>
            <Input placeholder='email'/>
            <Input placeholder='Password'/>
            <Button>LOGIN</Button>
            </Form> 
        </Card>
    );

};

export default LoginForm;