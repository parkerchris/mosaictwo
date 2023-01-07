import { signOut } from "next-auth/react"

export default function Application() {
    return (
        <div>
            <button onClick={() => signOut()}>Logout</button>
        </div>
    )
}