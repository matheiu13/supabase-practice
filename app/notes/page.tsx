import { createClient } from "@/utils/supabase/server";
import { Container, Text, Box, Grid } from "@mantine/core";
import { useEffect } from "react";

export default async function Page() {
  const supabase = createClient();
  const { data: forms } = await supabase
    .from("forms")
    .select("*,form_fields(*)");
  return (
    <>
      <Container>
        <p>
          {forms?.map((form, index) => {
            return (
              <div key={index}>
                <p>{form.formname}</p>
                <p>{form.formdescription}</p>
                {/* <p>{JSON.stringify(form.form_fields)}</p> */}
                {form.form_fields.map((input: any, index: number) => {
                  return (
                    <div key={index}>
                      <p>{input.label}</p>
                      <input
                        type={`${input.type}`}
                        style={{ color: "black" }}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </p>
      </Container>
    </>
  );
}
