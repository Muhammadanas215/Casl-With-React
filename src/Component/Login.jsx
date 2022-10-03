import { Button, Form, Select } from 'antd';
import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { AbilityContext } from '../CASL/Can';
import { abilityRules } from '../CASL/Ability';

const Login = () => {
    const { Option } = Select
    let navigate = useNavigate()
    const ability = useContext(AbilityContext)
    const [userrole, setUserrole] = useState('admin')

    const handleChange = (value) => {
        setUserrole(value)
    }

    const onFinish = (values) => {
        abilityRules(ability, userrole)
        navigate('/home')
    }

    return (
        <Form name='Login' onFinish={onFinish} style={{ margin: '100px' }}>
            <Form.Item label="Select Role" name="role">
                <Select defaultValue="Admin" onChange={handleChange}>
                    <Option value='Admin'>Admin</Option>
                    <Option value='Manager'>Manager</Option>
                    <Option value='User'>User</Option>
                    <Option value='Guest'>Guest</Option>
                </Select>
            </Form.Item>


            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Login
                </Button>
            </Form.Item>
        </Form>


    )
}
export default Login;

