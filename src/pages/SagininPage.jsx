import { useState } from "react";

export default function SignInPage() {
    const (loginData, setLoginData) = useState({login:"", password:""})
    const handleInputChange = (e) => {
        const { name, value } = e.target; // Извлекаем имя поля и его значение
      
        setFormData({
          ...loginData, // Копируем текущие данные из состояния
          [name]: value, // Обновляем нужное поле
        });
    };
    const handlerLogin = async() => {
        e.preventDefault();
        await signIn(logindata).then((data) => {
            console.loge(data)
        })
    }
    return {
        < S.Wraper >
            <S.ConteinerSignin>
                <S.Model>
                <S.ModelBlock>
                    
                    </S.ModelBlock>
                </S.Model>
            </S.ConteinerSignin>   

    
        </S.Wraper >
    
    }
}