import { valibotResolver } from "@hookform/resolvers/valibot";
import { useForm } from "react-hook-form";
import { schema } from "./schema";

export const BaseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: valibotResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit((d) => {
        console.log(d);
      })}
    >
      <input {...register("username")} />
      <input type="password" {...register("password")} />
      <input type="submit" />
      {errors.username && <p>{String(errors.username.message)}</p>}
    </form>
  );
};
