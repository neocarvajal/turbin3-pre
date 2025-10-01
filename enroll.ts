import {
 address,
 appendTransactionMessageInstructions,
 assertIsTransactionWithinSizeLimit,
 createKeyPairSignerFromBytes,
 createSolanaRpc,
 createSolanaRpcSubscriptions,
 createTransactionMessage,
 devnet,
 getSignatureFromTransaction,
 pipe,
 sendAndConfirmTransactionFactory,
 setTransactionMessageFeePayerSigner,
 setTransactionMessageLifetimeUsingBlockhash,
 signTransactionMessageWithSigners,
 addSignersToTransactionMessage,
 getProgramDerivedAddress,
 generateKeyPairSigner,
 getAddressEncoder
} from "@solana/kit";
import wallet from "./dev-wallet.json";
// import { getInitializeInstruction, getSubmitTsInstruction } from "./clients/js/src/generated/index";
const MPL_CORE_PROGRAM = address("CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d");
const PROGRAM_ADDRESS = address("TRBZyQHB3m68FGeVsqTK39Wm4xejadjVhP5MAZaKWDM");
const SYSTEM_PROGRAM = address("11111111111111111111111111111111");

async function main(): Promise<void> {
    const keypair = await createKeyPairSignerFromBytes(new Uint8Array(wallet));
}
    
    
