import React from 'react'

const Output = ({ paragraphs, tag,  includeHtml}) => {
  return (
    <div className='output'>
        {includeHtml === "Yes" ? (
            <p>{paragraphs.map((sentence) => `<${tag}>${sentence}</${tag}>`)}</p>
        ) : (
            <p>{paragraphs.map((sentence) => sentence)}</p>
        )}
    </div>
  )
}

export default Output