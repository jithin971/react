import { type } from "@testing-library/user-event/dist/type";
import { useForm } from "react-hook-form"
const ReactHooksEx = () => {

    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            defaultValues: {
                gender: []
            }
        }
    );

    const onSubmit = (data) => {
        console.log(data)
    }
    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                FirstName:<input {...register("firstName", { required: true, maxLength: 10 })} /><br />
                {errors.firstName?.type === 'required' && "First Name Required"}<br />
                {errors.firstName?.type === 'maxLength' && "Max Length exceed"}
            </div>
            <div>
                LastName:<input {...register("lastName", { pattern: /^[A_Za-z]+$/i })} />
                {errors.lastName?.type == "pattern" && "Only Alphabets"}
            </div>
            <div>
                age:<input type="number" {...register("age", { min: 18, max: 99 })} />
                {errors.age?.type == "min" && "Minimum age is 18"}
                {errors.age?.type == "max" && "Maximum  age is 99"}
            </div>
            <select {...register("gender", { required: true })}>
                <option>Male</option>
                <option>FeMale</option>
                <option>Others</option>
            </select>
            {errors.gender?.type == "required" && "Gender is required"}
            <div>
                <input
                    type="radio"
                    {...register("food", { required: true })}
                    name="food"
                    value="Veg"
                />veg
                <input
                    type="radio"
                    {...register("food", { required: true })}
                    name="food"
                    value="non-Veg"
                />Non-veg
            </div>
            {errors.food?.type == "required" && "food is required"}

            <div>
                <input
                    type="checkbox"
                    name="vaccinated"
                    {...register("isvaccinated",{required:true})}
                />
            </div>Vaccinated<br/>
            {errors.isvaccinated?.type == "required" && "vaccination is required"}
            <input type="submit" />
        </form>
    )
}
export default ReactHooksEx