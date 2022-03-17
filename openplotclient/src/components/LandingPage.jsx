import React, { useState, useEffect } from 'react';
import SignIn from './Login';
import SignUp from './Register'

const LandingPage = () => {
    return (
        <div>
            <div>LandingPage</div>
            <div>
                <SignIn/>
            </div>
            <div>
                <SignUp/>
            </div>
        </div>
    )
}

export default LandingPage;
