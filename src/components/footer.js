import React from 'react'
import { InstagramFilled, TwitterCircleFilled, FacebookFilled, LinkedinFilled } from '@ant-design/icons'

function footer() {
  return (
        <div className="footer">
            <div className="socialMedia">
                <InstagramFilled />
                <TwitterCircleFilled />
                <FacebookFilled />
                <LinkedinFilled />
            </div>
        </div>
  )
}

export default footer
