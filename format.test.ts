
import bs58 from 'bs58';
import prompt from 'prompt-sync';

const userPrompt = prompt();

function main_menu(): void {
    console.log("\n--- Format CLI ---");
    console.log("Options:");
    console.log("1:  (Base58 -> Bytes)");
    console.log("2:  (Bytes -> Base58)");
    
    // Pedir la opción al usuario
    const choice = userPrompt("1 o 2?: ");

    switch (choice.trim()) {
        case '1':
            console.log("\n[Base58 -> Bytes]");
            base58_to_wallet();
            break;
        case '2':
            console.log("\n[ Bytes -> Base58]");
            wallet_to_base58();
            break;
        default:
            console.error("\nError: '1' o '2'.");
            break;
    }
}

// Invocar el menú principal para comenzar
main_menu();

function base58_to_wallet(): void  {
    const base58Key = userPrompt("Enter the Base58 private key: ");
    
    if (!base58Key || base58Key.trim() === '') {
        console.error("Error: No key was entered");
        return;
    }

    try {

        const format: Uint8Array = bs58.decode(base58Key.trim());

        const formatArray = Array.from(format);
        
        // console.log(formatArray);

        console.log(`(Key): [${formatArray.join(',')}]`);
        
    } catch (error) {
        console.error("Error: The Base58 string has an incorrect format");
    }

}

function wallet_to_base58(): void {

    const VectorKey: Uint8Array = new Uint8Array([
        34,46,55,124,141,190,24,204,134,91,70,184,161,181,44,122,15,172,63,62,153,150,99,255,202,89,105,77,41,89,253,130,27,195,134,14,66,75,242,7,132,234,160,203,109,195,116,251,144,44,28,56,231,114,50,131,185,168,138,61,35,98,78,53
    ]);

    try {
        const base58String: string = bs58.encode(VectorKey);
        console.log(`(Base58): ${base58String}`);
        
    } catch (error) {
        console.error("Error: Failed to encode to Base58.");
    }
}
