import {prisma} from "../../../lib/prisma"

export async function POST(req: Request) {
  const { name, userId } = await req.json();

  const player = await prisma.player.create({
    data: {
      name: name,
      userId: userId
    }
  })

  return Response.json(player)
}