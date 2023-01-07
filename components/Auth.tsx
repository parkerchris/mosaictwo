import { signIn } from "next-auth/react"


export default function Auth() {
    return (
        <div>
            <button onClick={() => signIn('google')}></button>
        </div>
    )
}