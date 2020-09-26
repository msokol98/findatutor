import React from 'react';
import userContext from 'context/userContext';
import Help from './welcome/Help';
import WelcomeContainer from './welcome/WelcomeContainer';

const Portal = (props) => (

    <userContext.Consumer>
        {user => {
            console.log(user)

            if(!user) return <></>

            if(!user.welcomeComplete)
                return <WelcomeContainer updateUser={props.updateUser}  userId={user.id} jwt={user.jwt} />

            return(
                <div>
                    { user && !user.welcomeComplete && 
                        <Help 
                            userId={user.id} 
                            jwt={user.jwt} 
                        /> 
                    }
                </div>
            )
        }}
    </userContext.Consumer>

)
 
export default Portal;