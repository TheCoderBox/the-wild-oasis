import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import { addCabin } from "../../services/apiCabins";

function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors: formErrors } = formState;

  const queryClient = useQueryClient();
  const { mutate, isLoading: isAddingCabin } = useMutation({
    mutationFn: addCabin,
    onSuccess: () => {
      toast.success("New cabin successfully added");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    // console.log(data);
    // console.log({ ...data, image: data.image[0] });
    mutate({ ...data, image: data.image[0] });
  }
  function onSubmitError(errors) {
    console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onSubmitError)}>
      <FormRow label="Cabin name" error={formErrors?.name?.message}>
        <Input
          disabled={isAddingCabin}
          type="text"
          id="name"
          {...register("name", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow
        label="Maximum capacity"
        error={formErrors?.maxCapacity?.message}
      >
        <Input
          disabled={isAddingCabin}
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "this field is required",
            min: { value: 1, message: "Capacity shoud be at least 1" },
          })}
        />
      </FormRow>

      <FormRow label="Regular price" error={formErrors?.regularPrice?.message}>
        <Input
          disabled={isAddingCabin}
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "This field is required",
            min: { value: 1, message: "regular price should be at least 1" },
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={formErrors?.discount?.message}>
        <Input
          disabled={isAddingCabin}
          type="number"
          id="discount"
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount should be less than regular price",
          })}
          defaultValue={0}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        error={formErrors?.description?.message}
      >
        <Textarea
          disabled={isAddingCabin}
          type="number"
          id="description"
          {...register("description", { required: "This field is required" })}
          defaultValue=""
        />
      </FormRow>

      <FormRow label="Cabin photo" error={formErrors?.image?.message}>
        <FileInput
          {...register("image", { required: "This field is required" })}
          disabled={isAddingCabin}
          id="image"
          accept="image/*"
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isAddingCabin}>Add cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
