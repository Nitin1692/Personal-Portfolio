import React from 'react'
import { InstagramFilled, TwitterCircleFilled, FacebookFilled, LinkedinFilled } from '@ant-design/icons'
import '../styles/footer.css'

function footer() {
  function instagramClick(e){
    e.preventDefault();
    window.location.href = "https://instagram.com/nitin_jain_16?igshid=YmMyMTA2M2Y=";
  }
  function twitterClick(e){
    e.preventDefault();
    window.location.href = "https://twitter.com/nitin_jain_16?t=MHtXdWlu5ScoswLgiiOxOw&s=35"
  }
  function facebookClick(e){
    e.preventDefault();
    window.location.href = "https://www.facebook.com/profile.php?id=100026517661870&mibextid=ZbWKwL";
  }
  return (
        <div className="footer">
            <div className="socialMedia">
                <InstagramFilled onClick={instagramClick} />
                <TwitterCircleFilled onClick={twitterClick} />
                <FacebookFilled onClick={facebookClick} />
            </div>
            <p> &copy; 2022 Nitin Jain</p>
        </div>
  )
}

export default footer;
