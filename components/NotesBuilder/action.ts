"use server";
import { createClient } from "@/utils/supabase/server";
import { Notes } from "./NotesBuilder";

export async function createNotes(data: Notes) {
  try {
    const supabase = createClient();
    const fieldsToInsert = data.notes.map((field) => ({
      title: field.title,
    }));
    const { data: title, error: formError } = await supabase
      .from("notes")
      .insert(fieldsToInsert);
    if (formError) {
      throw new Error(`Error inserting form metadata: ${formError.message}`);
    }
  } catch (e) {
    console.error("Error inserting form data:", e);
  }
}
