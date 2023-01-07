import { signIn } from "next-auth/react"
import { Session } from 'next-auth'
import { useState } from "react"

interface AuthProps {
    session: Session | null;
    reloadSession: () => void
}


const Auth: React.FunctionComponent<AuthProps> = ({
    session,
    reloadSession
}) => {

    const [ userType, setUserType ] = useState('');

    const onSubmit = async () => {
        try {
            // graphql mutation
        } catch(error) {
            console.log("onsubmit error", error)
        }
    }


    return (
        <div>
            {session ? (
                <>
                    <p>Create a user type</p>
                    <input placeholder="enter a user type" value={userType} onChange={(event) => setUserType(event.target.value)}/>
                    <button onClick={onSubmit}>Save</button>
                </>
            ) : (
                <>
                    <h3>Mosaic</h3>
                    <button onClick={() => signIn('google')}>Continue with Google</button>

                </>
            )}
        </div>
    )
}

export default Auth;