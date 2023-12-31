import { ethers, Contract } from "ethers";
import stakingAbi from "../contracts/Staking.json";
import stakeTokenAbi from "../contracts/Token.json";

export const connectWallet = async () => {
    try {
        let signer, provider, stakingContract, stakeTokenContract, account, chainId;

        if (window.ethereum == null) {
            throw new Error("No wallet found");
        }

        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        const chainIdHex = await window.ethereum.request({ method: "eth_chainId" });
        chainId = parseInt(chainIdHex, 10);
        const selectedAccount = accounts[0];

        if (!selectedAccount) {
            throw new Error("No account found");
        }

        provider = new ethers.providers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();

        const stakingContractAddress = "";
        const stakeTokenContractAddress = "";

        stakingContract = new Contract(stakingContractAddress, stakingAbi, signer);
        stakeTokenContract = new Contract(stakeTokenContractAddress, stakeTokenAbi, signer);

        return { provider, selectedAccount, stakingContract, stakeTokenContract, chainId };
    } catch (error) {
        console.error(error);
        throw error;
    }
};
