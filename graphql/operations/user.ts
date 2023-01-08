import { gql } from '@apollo/client'

export default {
    Quieries: {},
    Mutations: {
        createUserType: gql`
            mutation createUserType($userType: String!) {
                createUserType(userType: $userType) {
                    success
                    error
                }
            }
        `,
    },
    Subscriptions: {}
}