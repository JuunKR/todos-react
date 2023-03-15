import { setDefaultResultOrder } from "dns";
import React, { useState } from "react";
import { useForm } from "react-hook-form"
import { DefaultValue } from "recoil";

// function ToDoList() {
//     const [toDo, setToDo] = useState("")
//     const [toDoError, setToDoError] = useState("")
//     const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//         const {
//             currentTarget: { value },
//         } = event;
//         setToDoError("")
//         setToDo(value)
//     }
//     const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         if (toDo.length < 10) {
//             return setToDoError("To do should be longer")
//         }
//         console.log("submit")
//     }
//     return (
//         <div>
//             <form onSubmit={onSubmit}>
//                 <input onChange={onChange} value={toDo} placeholder="Write a to do"></input>
//                 <button>Add</button>
//                 {toDoError !== "" ? toDoError : null}
//             </form>
//         </div>
//     );
// }
interface IForm {
    email: string
    firstName: string
    lastName: string
    username: string
    password: string
    password1: string
    extraError?: string
}
function ToDoList() {
    const { register, watch, handleSubmit, formState: { errors }, setError } = useForm<IForm>({ defaultValues: { email: "@naver.com" } });
    const onValid = (data: IForm) => {
        console.log(data)
        if (data.password !== data.password1) {
            return setError("password1", { message: "Password are not the same" }, { shouldFocus: true })
        }
        setError("extraError", { message: "Server offline" })
    }

    console.log(watch())


    return (
        <div>
            <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(onValid)}>
                <input {...register("email", { required: "Email is rquired", minLength: 10, pattern: { value: /^[A-Za-z0-9._%+-]+@naver.com$/, message: "Only naver.com emails allowed" } })} placeholder="Email"></input>
                <span>
                    {errors?.email?.message}
                </span>
                <input {...register("firstName", {
                    required: "write here",
                    validate: {
                        noNico: (value) =>
                            !value.includes("nico") || "no nicos allowed",
                        noNick: (value) =>
                            value.includes("nick") ? "no nick allowed" : true,
                    },
                })}
                    placeholder="Fisrt Name">

                </input>
                <span>
                    {errors?.firstName?.message}
                </span>
                <input {...register("lastName", { required: "Last Name is required", minLength: 5 })} placeholder="Last Name"></input>
                <span>
                    {errors?.lastName?.message}
                </span>
                <input {...register("username", { required: "Username is required", minLength: 5 })} placeholder="Username"></input>
                <span>
                    {errors?.username?.message}
                </span>
                <input {...register("password", { required: "Password is required", minLength: { value: 5, message: " Your password is too short." } })} placeholder="Password"></input>
                <span>
                    {errors?.password?.message}
                </span>
                <input {...register("password1", { required: "Password is required", minLength: { value: 5, message: " Your password is too short." } })} placeholder="Password1"></input>
                <span>
                    {errors?.password1?.message}
                </span>
                <button>Add</button>
                <span>
                    {errors?.extraError?.message}
                </span>
            </form>
        </div>
    );
}

export default ToDoList;