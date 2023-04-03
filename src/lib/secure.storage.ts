import * as SecureStore from "expo-secure-store";

export const store= async (key: string, value: any) => {
    try {
        await SecureStore.setItemAsync(key, value);
    } catch(error) {
        console.log(error);
    }
}

export const get = async (key: string): Promise<string | null> => {
    try {
        const value = await SecureStore.getItemAsync(key);
        return value;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const remove = async (key: string) => {
    try {
        await SecureStore.deleteItemAsync(key);
    } catch (error) {
        console.log(error);
    }
}