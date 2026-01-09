/** @format */

import { createClient } from "@supabase/supabase-js";
import "dotenv/config";

const db = createClient(process.env.PROJECT_URL, process.env.PUBLIC_KEY);

const getAllPets = async () => {
  try {
    const response = await db.from("pets").select();

    if (response.error) {
      throw response.error;
    }

    console.log("Pets from database:");
    console.table(response.data);
  } catch (error) {
    console.error("Failed to load pets:", error.message);
  }
};

getAllPets();
