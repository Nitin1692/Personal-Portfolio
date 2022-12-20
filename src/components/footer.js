import React from 'react'
import { InstagramFilled, TwitterCircleFilled, FacebookFilled, LinkedinFilled } from '@ant-design/icons'
import '../styles/footer.css'

function footer() {
  return (
        <div className="footer">
            <div className="socialMedia">
                <InstagramFilled />
                <TwitterCircleFilled />
                <FacebookFilled />
                <LinkedinFilled />
            </div>
            <p> &copy; 2022 Nitin Jain</p>
        </div>
  )
}

export default footer;
