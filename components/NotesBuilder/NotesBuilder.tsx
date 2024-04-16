"use client";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Flex } from "@mantine/core";
import { createNotes } from "./action";

export type Notes = {
  notes: {
    title: string;
  }[];
};

export default function NotesBuilder() {
  const { register, handleSubmit, control } = useForm<Notes>({
    defaultValues: {
      notes: [{ title: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({ control, name: "notes" });
  const onSubmit = (data: Notes) => {
    // console.log(data);
    createNotes(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {fields.map((field, index) => {
            return (
              <Flex w="30vw" key={field.id}>
                <input
                  {...register(`notes.${index}.title` as const)}
                  placeholder="enter a note"
                  style={{ color: "black" }}
                />
                <button type="button" onClick={() => remove(index)}>
                  DELETE
                </button>
              </Flex>
            );
          })}
        </div>
        <a
          onClick={() =>
            append({
              title: "",
            })
          }
        >
          Add a note?
        </a>
        <input type="submit" />
      </form>
    </div>
  );
}
