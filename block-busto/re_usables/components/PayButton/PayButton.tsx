import { FC } from 'react'
import { loadStripe } from '@stripe/stripe-js';

const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const PayButton: FC = () => {
    return (
        <div>

        </div>
    );
}

export default PayButton;