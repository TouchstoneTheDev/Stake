import React, { useState, useEffect } from "react";
import { connectWallet } from "../../utils/connectWallet";

const Wallet = () => {
    const [state, setState] = useState({
        provider: null,
        account: null,
        stackingContract: null,
        stakeTokenContract: null,
        chainId: null
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleWallet = async () => {
        try {
            setIsLoading(true);
            const {
                provider,
                account,
                stackingContract,
                stakeTokenContract,
                chainId
            } = await connectWallet();
            console.log(provider,
                account,
                stackingContract,
                stakeTokenContract,
                chainId);
            setState({
                provider,
                account,
                stackingContract,
                stakeTokenContract,
                chainId
            });
        } catch (error) {
            console.error("Error Connect", error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return <button onClick={handleWallet}> connect wallet</button>;
};

export default Wallet;