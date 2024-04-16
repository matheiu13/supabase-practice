import NotesBuilder from "@/components/NotesBuilder/NotesBuilder";
import { createClient } from "@/utils/supabase/server";
import { Container, Text, Box, Grid } from "@mantine/core";
import { useEffect } from "react";

export default async function Page() {
  // const supabase = createClient();
  // const { data: notes } = await supabase.from("notes").select();
  const supabase = createClient();
  const { data: forms } = await supabase
    .from("forms")
    .select("*,form_fields(*)");
  // console.log(forms);

  const { data: formId } = await supabase
    .from("forms")
    .select("id")
    .eq("formname", "test form");

  console.log("your form id: ", formId);

  return (
    <>
      <Container>
        <NotesBuilder />
      </Container>
    </>
  );
}
