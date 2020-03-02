import { message } from 'antd'
import React from 'react'
import { CodePaper } from './CodePaper'

export const CodePaperDemo = () => {
    const handleChange = (text: string) =>{
        message.info(text)
    }
    return (
        <div>
            <h3>代码块</h3>
            <CodePaper text='' handleChange={handleChange} />
        </div>
    )
}
