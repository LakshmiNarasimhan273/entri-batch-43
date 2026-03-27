import React from 'react'
import Button from './Button'

function Dashboard(props) {
  return (
    <div>
        {
            props.data.loginStatus ? (
                <div>
                    <h2>Welcome, {props.data.name}</h2>
                    <p>{props.data.role}</p>

                    {
                        props.data.role === "developer" ? (
                            <Button name="Submit Code" />
                        ) : props.data.role === "lead" ? (
                            <div>
                                <Button name="Create Task" />
                                <Button name="Approve Task" />
                            </div>
                        ) : props.data.role === "manager" ? (
                            <div>
                                <Button name="Create Task" />
                                <Button name="Delete Task" />
                                <Button name="Approve Task" />
                            </div>
                        ) : (
                            <p>Access Denied</p>
                        )
                    }

                </div>
            ) : (
                <p>Please Login First</p>
            )
        }
    </div>
  )
}

export default Dashboard