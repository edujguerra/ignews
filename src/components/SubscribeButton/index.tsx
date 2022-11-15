import { useSession, signIn } from 'next-auth/react';
import styles from './styles.module.scss';

interface SubscribeButton {
    priceId: string    
}

export function SubscribeButton({ priceId }:SubscribeButton){
   // const [session] = useSession();

    /*function handleSubscribe(){
        if (!session) {
            signIn('gitHub')
            return;
        }

        //Criação da checkout

    }*/

    return (
        <button 
            type="button"
            //onClick={handleSubscribe}
            className={styles.subscribeButton}>            
            Subscribe now
        </button>
    )
}