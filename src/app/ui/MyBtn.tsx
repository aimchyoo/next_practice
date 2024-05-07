import { Button } from "antd";

interface MyBtnProps {
    name: string;
}
export default function MyBtn(btnProps: MyBtnProps) {
    return <>
        <Button>{btnProps.name}</Button>
    </>
}