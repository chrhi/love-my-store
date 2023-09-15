import { prisma } from "@/lib/prisma";
import { registerSchema } from "@/lib/validations/auth";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  const body = await req.json();

  const data = registerSchema.parse(body);

  // hash the password
  const hasedPassword = await bcrypt.hash(data.password, 10).catch((err) => {
    console.log(err);
    throw new Error("something went wrong ");
  });

  const user = await prisma.user.create({
    data: {
      email: data.email,
      name: data.firstName,
      LastName: data.lastName,
      emailVerified: new Date(),
      password: hasedPassword,
    },
  });

  return new Response(
    JSON.stringify({
      status: "user has been created",
    })
  );
}
