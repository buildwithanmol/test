import fs from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function POST(req: NextRequest) {
  const { component, category } = await req.json();
  try {
    // Construct the absolute path to the .tsx file
    const tsxFilePath = path.join(
      process.cwd(),
      `public/usage-components/${category}/${component}-usage.tsx`
    );
    console.log(`Reading .tsx file from path: ${tsxFilePath}`);

    // Read the .tsx file content
    const tsxFileContent = await fs.readFile(tsxFilePath, "utf-8");
    console.log(`.tsx File content: ${tsxFileContent}`);

    // Construct the path to the .txt file
    const txtFilePath = path.join(
      process.cwd(),
      `public/usage-components/${category}/${component}-usage.txt`
    );
    console.log(`Copying .tsx content to .txt file at path: ${txtFilePath}`);

    // Write the .tsx content to .txt file
    await fs.writeFile(txtFilePath, tsxFileContent, "utf-8");

    // Read the .txt file content
    const txtFileContent = await fs.readFile(txtFilePath, "utf-8");
    console.log(`.txt File content: ${txtFileContent}`);

    // Return the .txt file content as JSON
    return NextResponse.json({ message: txtFileContent, status: 200 });
  } catch (error: any) {
    console.error(`Error handling file: ${error.message}`);
    return NextResponse.json({ message: error.message, status: 400 });
  }
}
