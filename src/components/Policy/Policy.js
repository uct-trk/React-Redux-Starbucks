import React from 'react'
import { Link } from 'react-router-dom'
import './policy.css'

const Policy = () => {
    return (
        <div className="policy">
            <div className="policy1">
            *At participating stores. Some restrictions apply. See <Link> starbucks.com/rewards.</Link>
            </div>
            <div className="policy2">
            **Restrictions & other fees apply. See Uber Eats app for terms & availability. Fees subject to change. Limited time offer. May not be combined with other offers, discounts or promotions. Menu limited. Restricted delivery area. Available at participating locations only. Prices for Starbucks® items purchased through Uber Eats may be higher than posted in stores or as marked. May not be combined with other offers, discounts or promotions.
            </div>
            <div className="policy3">
            ***For every Starbucks eGift Card in our Military Appreciation Month category sold May 1-31, we’ll donate $5 to Blue Star Families and Operation Gratitude to support the mental health and well-being of our military community. Donations will be evenly divided between the two organizations. Learn more at <Link> bluestarfam.org</Link> and <Link> operationgratitude.com.</Link>
            </div>
        </div>
    )
}

export default Policy
