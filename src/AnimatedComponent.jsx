import React from 'react'
import './App.css'
import { animated, useSpring, Spring } from '@react-spring/web'

export default function AnimatedTest() {
    const springs = useSpring({
        from: { x: 0},
        to: { x: 100}
    })
    return (
        <animated.div
            style={{
                width: 80,
                height: 80,
                background: '#ff6d6d',
                borderRadius: 8,
                ...springs
            }}
        />
    )
}

export class AnimatedTestClass extends React.Component {
    render() {
        return (
            <Spring from={{x:0}} to={{x:100}}>
                {props => (<animated.div
                    style={{
                    width: 80,
                    height: 80,
                    background: '#ff6d6d',
                    borderRadius: 8,
                    ...props}}
                > Foo </animated.div>)}
            </Spring>
        )
    }
}