import { ScrollView } from "react-native";
import { Form } from "../components/login/Form";

export const Login = () => {

    return (
        <ScrollView className="bg-slate-200 h-full"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ marginTop: 20 }}>
            <Form />
        </ScrollView>
    )
}