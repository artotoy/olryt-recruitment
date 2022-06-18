import React, { useState } from 'react'

/* Styles */
import './App.css'

/* Components */
import Card from './Card'

const App = () => {
    return (
        <div className='app-main'>
            <Card title="Papa" name="Arthur Olano" age={40} gender="Male"/>
            <Card title="Mama" name="Armi Olano" age={38} gender="Female"/>
            <Card title="Ate" name="Aria Olano" age={8} gender="Female"/>
            <Card title="Bulilit" name="Keomi Olano" age={2} gender="Female"/>
        </div>
    )
}

export default App
