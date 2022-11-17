import { useSession, signIn } from 'next-auth/react';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import styles from './styles.module.scss';


export function SubscribeButton({ priceId }){
    const { data: session, status } = useSession();

    async function handleSubscribe(){
        if (!session) {
            signIn('gitHub')
            return;
        }

        try {            
            const response = await api.post('/subscribe',{user: session.data});            
            const { sessionId }  =  response.data;
            const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
            
            stripe.redirectToCheckout({sessionId })            
        }
        catch (err) {
            alert(err);
        }

    }

    return (
        <button 
            type="button"
            onClick={handleSubscribe}
            className={styles.subscribeButton}>            
            Subscribe now
        </button>
    )
}