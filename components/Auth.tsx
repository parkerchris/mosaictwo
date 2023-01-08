import { useMutation } from '@apollo/client'
import { signIn } from "next-auth/react"
import { Session } from 'next-auth'
import { useState } from "react"
import UserOperations from '../graphql/operations/user'
import { CreateUserTypeData, CreateUserTypeVariables } from '../util/types'

interface AuthProps {
    session: Session | null;
    reloadSession: () => void
}




const Auth: React.FunctionComponent<AuthProps> = ({
    session,
    reloadSession
}) => {

    const [ userType, setUserType ] = useState('');

    const [createUserType, { data, loading, error }] = useMutation<
        CreateUserTypeData, 
        CreateUserTypeVariables
    >(UserOperations.Mutations.createUserType)

    console.log("here is the data", data, loading, error)

    const onSubmit = async () => {
        try {
           await createUserType({ variables: {userType} })
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