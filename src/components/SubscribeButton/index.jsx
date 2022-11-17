import { useSession, signIn } from 'next-auth/react';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import styles from './styles.module.scss';

//interface SubscribeButton {
//    priceId: string    
//}

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
            const stripe = await getStripeJs;
            stripe.redirectToCheckout({sessionId: sessionId})
            
        }
        catch (err) {
            alert(JSON.stringify(err));
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