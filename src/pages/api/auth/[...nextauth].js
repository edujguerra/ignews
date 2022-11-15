import NextAuth from "next-auth/next"
import GithubProvider from "next-auth/providers/github"
import Auth0 from "next-auth/providers/auth0";

export const authOptions = { 
    // Configure one or more authentication providers  
    providers: [    
        GithubProvider({      
            clientId: process.env.GITHUB_CLIENT_ID,      
            clientSecret: process.env.GITHUB_CLIENT_SECRET,   
            scope: 'read-user'
        }),    
        // ...add more providers here  
    ],
}
export default NextAuth(authOptions)