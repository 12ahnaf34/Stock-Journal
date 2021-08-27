import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Profile() {
    const {user, isAuthenticated} = useAuth0();

    return(
        isAuthenticated && (
            <div>
                <img className='profile-pic' src={user.picture} alt={user.name} />
                <span>{user.name}</span>
            </div>
        )
    )
}

export default Profile;